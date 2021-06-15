import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MultiCall } from 'eth-multicall';
import async from 'async';

import { getNetworkMulticall } from 'features/helpers/getNetworkData';
import { byDecimals } from 'features/helpers/bignumber';
import { fetchPendingEle, fetchPendingReward } from '../../web3';

import { pool4Abi, miningFarmAbi } from 'features/configure/abi';

import {
  MINING_FETCH_PENDING_REWARDS_BEGIN,
  MINING_FETCH_PENDING_REWARDS_SUCCESS,
  MINING_FETCH_PENDING_REWARDS_FAILURE
} from './constants';

export function fetchPendingRewards({ address, web3, pools }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_PENDING_REWARDS_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      const farmPools = pools.filter(pool => pool.claimable || pool.farm);

      // TODO: multicall, doesn't work if msg.sender isn't the users address
      // const calls = farmPools.map(pool => {
      //   if (pool.claimable) {
      //     const { earnContractAddress } = pool;
      //     const contract = new web3.eth.Contract(miningFarmAbi, earnContractAddress);
      //     return {
      //       pendingEle: contract.methods.pendingEleven(address),
      //       pendingToken: contract.methods['pending' + pool.claimableRewardMethod](address)
      //     }
      //   } else {
      //     const { earnContractAddress, masterchefPid } = pool.farm;
      //     const contract = new web3.eth.Contract(pool4Abi, earnContractAddress);;
      //     return {
      //       pendingEle: contract.methods.pendingEleven(masterchefPid, address),
      //     }
      //   }
      // });

      // const multicall = new MultiCall(web3, getNetworkMulticall());
      // multicall.all([calls])
      //   .then(([results]) => {
      //     const rewards = {};

      //     farmPools.map((pool, index) => {
      //       const { tokenDecimals } = pool;

      //       rewards[pool.id] = {
      //         pendingEle: results[index].pendingEle
      //           ? byDecimals(results[index].pendingEle, 18)
      //           : null,
      //         pendingToken: results[index].pendingToken
      //           ? byDecimals(results[index].pendingToken, tokenDecimals)
      //           : null,
      //       }
      //     });

      //     dispatch({
      //       type: MINING_FETCH_PENDING_REWARDS_SUCCESS,
      //       data: rewards,
      //     });

      //     resolve();
      //   })
      //   .catch(error => {
      //     dispatch({
      //       type: MINING_FETCH_PENDING_REWARDS_FAILURE,
      //     });

      //     return reject(error.message || error);
      //   });

      // TODO: separate calls
      async.map(farmPools, (pool, callback) => {
        const { tokenDecimals } = pool;

        const requests = [];

        if (pool.claimable) {
          const { earnContractAddress } = pool;

          // Get pending ELE reward
          requests.push(
            (callbackInner) => {
              const tokenName = 'Eleven';

              fetchPendingReward({
                web3,
                address,
                earnContractAddress,
                tokenName
              })
                .then(data => callbackInner(null, data))
                .catch(error => callbackInner(error.message || error))
            }
          );

          // Get pending 11-token reward
          requests.push(
            (callbackInner) => {
              const tokenName = pool.claimableRewardMethod;

              fetchPendingReward({
                web3,
                address,
                earnContractAddress,
                tokenName
              })
                .then(data => callbackInner(null, data))
                .catch(error => callbackInner(error.message || error))
            }
          );
        } else {
          const { earnContractAddress, masterchefPid } = pool.farm;

          // Get farm pending ELE reward
          requests.push(
            (callbackInner) => {
              fetchPendingEle({
                web3,
                address,
                earnContractAddress,
                masterchefPid
              })
                .then(data => callbackInner(null, data))
                .catch(error => callbackInner(error.message || error))
            },
          );
        }

        async.parallel(requests, (error, data) => {
          callback(null, {
            id: pool.id,
            pendingEle: data[0]
              ? byDecimals(data[0], 18)
              : null,
            pendingToken: pool.claimable && data[1]
              ? byDecimals(data[1], tokenDecimals)
              : null,
          })
        })
      }, (error, data) => {
        if (error) {
          dispatch({
            type: MINING_FETCH_PENDING_REWARDS_FAILURE,
          })

          return reject(error.message || error)
        }

        const pendingRewards = {};

        data.forEach(pool => {
          pendingRewards[pool.id] = pool;
        });

        dispatch({
          type: MINING_FETCH_PENDING_REWARDS_SUCCESS,
          data: pendingRewards,
        })
        resolve()
      });
    });

    return promise;
  };
}

export function useFetchPendingRewards() {
  const dispatch = useDispatch();

  const { pendingRewards, fetchPendingRewardsPending, fetchPendingRewardsDone } = useSelector(
    state => ({
      pendingRewards: state.mining.pendingRewards,
      fetchPendingRewardsDone: state.mining.fetchPendingRewardsDone,
      fetchPendingRewardsPending: state.mining.fetchPendingRewardsPending,
    }),
    shallowEqual
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchPendingRewards(data));
    },
    [dispatch],
  );

  return {
    pendingRewards,
    fetchPendingRewards: boundAction,
    fetchPendingRewardsDone,
    fetchPendingRewardsPending,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MINING_FETCH_PENDING_REWARDS_BEGIN:
      return {
        ...state,
        fetchPendingRewardsPending: true,
      };

    case MINING_FETCH_PENDING_REWARDS_SUCCESS:
      return {
        ...state,
        pendingRewards: action.data,
        fetchPendingRewardsDone: true,
        fetchPendingRewardsPending: false,
      };

    case MINING_FETCH_PENDING_REWARDS_FAILURE:
      return {
        ...state,
        fetchPendingRewardsPending: false,
      };

    default:
      return state;
  }
}
