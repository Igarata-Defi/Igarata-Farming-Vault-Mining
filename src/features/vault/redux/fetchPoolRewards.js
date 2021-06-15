import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import async from 'async';

import { byDecimals } from 'features/helpers/bignumber';
import { fetchPendingEle, fetchPendingReward } from '../../web3';

import {
  VAULT_FETCH_POOL_REWARDS_BEGIN,
  VAULT_FETCH_POOL_REWARDS_SUCCESS,
  VAULT_FETCH_POOL_REWARDS_FAILURE
} from './constants';

export function fetchPoolRewards({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_POOL_REWARDS_BEGIN,
      id: pool.id
    });

    const promise = new Promise((resolve, reject) => {
      const { tokenDecimals } = pool;

      const requests = [];

      if (pool.claimable) {
        const { earnContractAddress } = pool;

        // Get pending ELE reward
        if (pool.claimableEle) {
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
        } else {
          requests.push(callbackInner => callbackInner(null, null));
        }

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
            type: VAULT_FETCH_POOL_REWARDS_FAILURE,
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
          type: VAULT_FETCH_POOL_REWARDS_SUCCESS,
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
      pendingRewards: state.vault.pendingRewards,
      fetchPoolRewardsDone: state.vault.fetchPoolRewardsDone,
      fetchPoolRewardsPending: state.vault.fetchPoolRewardsPending,
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
    case VAULT_FETCH_POOL_REWARDS_BEGIN:
      fetchPoolRewardsPending[action.id] = true;

      return {
        ...state,
        fetchPoolRewardsPending,
      };

    case VAULT_FETCH_POOL_REWARDS_SUCCESS:
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

    case VAULT_FETCH_POOL_REWARDS_FAILURE:
      fetchPoolRewardsPending[action.id] = false;

      return {
        ...state,
        fetchPoolRewardsPending,
      };

    default:
      return state;
  }
}