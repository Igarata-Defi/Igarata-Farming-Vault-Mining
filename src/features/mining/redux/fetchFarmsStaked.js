import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MultiCall } from 'eth-multicall';

import { byDecimals } from 'features/helpers/bignumber';
import { getNetworkMulticall } from 'features/helpers/getNetworkData';
import { pool4Abi, masterChefABI } from 'features/configure/abi';

import {
  MINING_FETCH_FARMS_STAKED_BEGIN,
  MINING_FETCH_FARMS_STAKED_SUCCESS,
  MINING_FETCH_FARMS_STAKED_FAILURE
} from './constants';
import BigNumber from 'bignumber.js';

export function fetchFarmsStaked({ address, web3, pools, network }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_FARMS_STAKED_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const farmPools = pools.filter(pool => pool.farm && pool.network == network);

      const multicall = new MultiCall(web3, getNetworkMulticall(network));

      const calls = farmPools.map(pool => {
        const { earnContractAddress, masterchefPid } = pool.farm;

        const contract = new web3.eth.Contract(masterChefABI, earnContractAddress);
        return {
          stakedAmount: contract.methods.userInfo(masterchefPid, address)
        };
      });

      multicall
        .all([calls])
        .then(([results]) => {
          const stakedAmounts = {};

          pools.map(pool => {
            const callIndex = farmPools.findIndex(farmPool => farmPool.id == pool.id);

            stakedAmounts[pool.id] = callIndex >= 0
              ? byDecimals(results[callIndex].stakedAmount[0], pool.itokenDecimals)
              : new BigNumber(0);
          })

          dispatch({
            type: MINING_FETCH_FARMS_STAKED_SUCCESS,
            data: stakedAmounts,
          })

          resolve();
        })
        .catch(error => {
          dispatch({
            type: MINING_FETCH_FARMS_STAKED_FAILURE,
          });

          return reject(error.message || error);
        });
    });

    return promise;
  };
}

export function useFetchFarmsStaked() {
  const dispatch = useDispatch();

  const { pools, fetchFarmsStakedDone, fetchFarmsStakedPending } = useSelector(
    state => ({
      pools: state.mining.pools,
      fetchFarmsStakedDone: state.mining.fetchFarmsStakedDone,
      fetchFarmsStakedPending: state.mining.fetchFarmsStakedPending,
    }),
    shallowEqual
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchFarmsStaked(data));
    },
    [dispatch],
  );

  return {
    pools,
    fetchFarmsStaked: boundAction,
    fetchFarmsStakedDone,
    fetchFarmsStakedPending,
  };
}

export function reducer(state, action) {
  const { pools } = state;

  switch (action.type) {
    case MINING_FETCH_FARMS_STAKED_BEGIN:
      return {
        ...state,
        fetchFarmsStakedPending: true,
      };

    case MINING_FETCH_FARMS_STAKED_SUCCESS:
      const updatedPools = pools.map(pool => {
        const stakedAmount = action.data[pool.id];

        return {
          ...pool,
          stakedAmount
        }
      });

      return {
        ...state,
        pools: updatedPools,
        fetchFarmsStakedDone: true,
        fetchFarmsStakedPending: false,
      };

    case MINING_FETCH_FARMS_STAKED_FAILURE:
      return {
        ...state,
        fetchFarmsStakedPending: false,
      };

    default:
      return state;
  }
}
