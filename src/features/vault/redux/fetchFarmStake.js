import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { farmStake } from '../../web3'

import {
  VAULT_FETCH_FARM_STAKE_BEGIN,
  VAULT_FETCH_FARM_STAKE_SUCCESS,
  VAULT_FETCH_FARM_STAKE_FAILURE,
} from './constants';

export function fetchFarmStake({ address, web3, pool, amount }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_FARM_STAKE_BEGIN,
      id: pool.id
    });

    const promise = new Promise(async (resolve, reject) => {
      const { earnContractAddress, masterchefPid } = pool.farm;

      farmStake({
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
            type: VAULT_FETCH_FARM_STAKE_SUCCESS,
            id: pool.id
          });

          resolve();
        })
        .catch(error => {
          dispatch({
            type: VAULT_FETCH_FARM_STAKE_FAILURE,
            id: pool.id
          });

          reject(error.message || error);
        });
    });
    return promise;
  }
}

export function useFetchFarmStake() {
  const dispatch = useDispatch();

  const { fetchFarmStakePending } = useSelector(
    state => ({
      fetchFarmStakePending: state.vault.fetchFarmStakePending,
    })
  );

  const boundAction = useCallback(
    data => dispatch(fetchFarmStake(data)),
    [dispatch],
  );

  return {
    fetchFarmStake: boundAction,
    fetchFarmStakePending
  };
}

export function reducer(state, action) {
  const { fetchFarmStakePending } = state;

  switch (action.type) {
    case VAULT_FETCH_FARM_STAKE_BEGIN:
      fetchFarmStakePending[action.id] = true;

      return {
        ...state,
        fetchFarmStakePending
      };

    case VAULT_FETCH_FARM_STAKE_SUCCESS:
      fetchFarmStakePending[action.id] = false;

      return {
        ...state,
        fetchFarmStakePending
      };

    case VAULT_FETCH_FARM_STAKE_FAILURE:
      fetchFarmStakePending[action.id] = false;

      return {
        ...state,
        fetchFarmStakePending
      };

    default:
      return state;
  }
}
