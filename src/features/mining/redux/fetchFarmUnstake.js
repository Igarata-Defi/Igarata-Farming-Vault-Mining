import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { farmUnstake } from '../../web3'

import {
  MINING_FETCH_FARM_UNSTAKE_BEGIN,
  MINING_FETCH_FARM_UNSTAKE_SUCCESS,
  MINING_FETCH_FARM_UNSTAKE_FAILURE,
} from './constants';

export function fetchFarmUnstake({ address, web3, pool, amount }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_FARM_UNSTAKE_BEGIN,
      id: pool.id
    });

    const promise = new Promise(async (resolve, reject) => {
      const { earnContractAddress, masterchefPid } = pool.farm;

      farmUnstake({
        web3,
        address,
        earnContractAddress,
        earnContractAbi: null,
        masterchefPid,
        amount,
        dispatch
      })
        .then(data => {
          dispatch({
            type: MINING_FETCH_FARM_UNSTAKE_SUCCESS,
            id: pool.id
          });

          resolve();
        })
        .catch(error => {
          dispatch({
            type: MINING_FETCH_FARM_UNSTAKE_FAILURE,
            id: pool.id
          });

          reject(error.message || error);
        });
    });
    return promise;
  }
}

export function useFetchFarmUnstake() {
  const dispatch = useDispatch();

  const { fetchFarmUnstakePending } = useSelector(
    state => ({
      fetchFarmUnstakePending: state.mining.fetchFarmUnstakePending,
    })
  );

  const boundAction = useCallback(
    data => dispatch(fetchFarmUnstake(data)),
    [dispatch],
  );

  return {
    fetchFarmUnstake: boundAction,
    fetchFarmUnstakePending
  };
}

export function reducer(state, action) {
  const { fetchFarmUnstakePending } = state;

  switch (action.type) {
    case MINING_FETCH_FARM_UNSTAKE_BEGIN:
      fetchFarmUnstakePending[action.id] = true;

      return {
        ...state,
        fetchFarmUnstakePending
      };

    case MINING_FETCH_FARM_UNSTAKE_SUCCESS:
      fetchFarmUnstakePending[action.id] = false;

      return {
        ...state,
        fetchFarmUnstakePending
      };

    case MINING_FETCH_FARM_UNSTAKE_FAILURE:
      fetchFarmUnstakePending[action.id] = false;

      return {
        ...state,
        fetchFarmUnstakePending
      };

    default:
      return state;
  }
}
