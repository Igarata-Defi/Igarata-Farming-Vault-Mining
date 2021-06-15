import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import async from 'async';

import { byDecimals } from 'features/helpers/bignumber';
import { fetchPendingEle, fetchPendingReward } from '../../web3';

import {
  MINING_FETCH_POOL_REWARDS_BEGIN,
  MINING_FETCH_POOL_REWARDS_SUCCESS,
  MINING_FETCH_POOL_REWARDS_FAILURE
} from './constants';

export function fetchPoolRewards({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_POOL_REWARDS_BEGIN,
      id: pool.id
    });

    const promise = new Promise((resolve, reject) => {
      const { tokenDecimals } = pool;

      const requests = [];

      if (pool.farm) {
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
      } else if (pool.farm) {
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
        if (error) {
          dispatch({
            type: MINING_FETCH_POOL_REWARDS_FAILURE,
            id: pool.id
          })

          return reject(error.message || error)
        }

        const poolRewards = {
          pendingEle: data[0]
            ? byDecimals(data[0], 18)
            : null,
          pendingToken: pool.claimable && data[1]
            ? byDecimals(data[1], tokenDecimals)
            : null,
        };

        dispatch({
          type: MINING_FETCH_POOL_REWARDS_SUCCESS,
          data: poolRewards,
          id: pool.id
        })
        resolve()
      });
    });

    return promise;
  };
}

export function useFetchPoolRewards() {
  const dispatch = useDispatch();

  const { pendingRewards, fetchPoolRewardsDone, fetchPoolRewardsPending } = useSelector(
    state => ({
      pendingRewards: state.mining.pendingRewards,
      fetchPoolRewardsDone: state.mining.fetchPoolRewardsDone,
      fetchPoolRewardsPending: state.mining.fetchPoolRewardsPending,
    }),
    shallowEqual
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchPoolRewards(data));
    },
    [dispatch],
  );

  return {
    pendingRewards,
    fetchPoolRewards: boundAction,
    fetchPoolRewardsDone,
    fetchPoolRewardsPending,
  };
}

export function reducer(state, action) {
  const { pendingRewards, fetchPoolRewardsDone, fetchPoolRewardsPending } = state;

  switch (action.type) {
    case MINING_FETCH_POOL_REWARDS_BEGIN:
      fetchPoolRewardsPending[action.id] = true;

      return {
        ...state,
        fetchPoolRewardsPending,
      };

    case MINING_FETCH_POOL_REWARDS_SUCCESS:
      fetchPoolRewardsDone[action.id] = true;
      fetchPoolRewardsPending[action.id] = false;
      pendingRewards[action.id] = action.data;

      return {
        ...state,
        pendingRewards: {
          ...pendingRewards,
          [action.id]: action.data
        },
        fetchPoolRewardsDone,
        fetchPoolRewardsPending,
      };

    case MINING_FETCH_POOL_REWARDS_FAILURE:
      fetchPoolRewardsPending[action.id] = false;

      return {
        ...state,
        fetchPoolRewardsPending,
      };

    default:
      return state;
  }
}