import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { farmClaim } from '../../web3'

import {
  VAULT_FETCH_FARM_CLAIM_BEGIN,
  VAULT_FETCH_FARM_CLAIM_SUCCESS,
  VAULT_FETCH_FARM_CLAIM_FAILURE,
} from './constants';

export function fetchFarmClaim({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_FARM_CLAIM_BEGIN,
      id: pool.id,
    });

    const promise = new Promise((resolve, reject) => {
      const { earnContractAddress, masterchefPid } = pool.farm;

      farmClaim({
        web3,
        address,
        earnContractAddress,
        earnContractAbi: null,
        masterchefPid,
        dispatch
      })
        .then(data => {
          dispatch({
            type: VAULT_FETCH_FARM_CLAIM_SUCCESS,
            data,
            id: pool.id,
          });

          resolve(data);
        })
        .catch(error => {
          dispatch({
            type: VAULT_FETCH_FARM_CLAIM_FAILURE,
            id: pool.id,
          });

          reject(error.message || error);
        });
    });
    return promise;
  };
}

export function useFetchFarmClaim() {
  const dispatch = useDispatch();

  const { fetchFarmClaimPending } = useSelector(state => ({
    fetchFarmClaimPending: state.vault.fetchFarmClaimPending,
  }));

  const boundAction = useCallback(data => dispatch(fetchFarmClaim(data)), [dispatch]);

  return {
    fetchFarmClaim: boundAction,
    fetchFarmClaimPending,
  };
}

export function reducer(state, action) {
  const { fetchFarmClaimPending } = state;

  switch (action.type) {
    case VAULT_FETCH_FARM_CLAIM_BEGIN:
      fetchFarmClaimPending[action.id] = true;

      return {
        ...state,
        fetchFarmClaimPending
      };

    case VAULT_FETCH_FARM_CLAIM_SUCCESS:
      fetchFarmClaimPending[action.id] = false;

      return {
        ...state,
        fetchFarmClaimPending
      };

    case VAULT_FETCH_FARM_CLAIM_FAILURE:
      fetchFarmClaimPending[action.id] = false;

      return {
        ...state,
        fetchFarmClaimPending
      };

    default:
      return state;
  }
}
