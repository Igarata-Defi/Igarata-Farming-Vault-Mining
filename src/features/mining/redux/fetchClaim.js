import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { claimRewards } from '../../web3'

import {
  MINING_FETCH_CLAIM_BEGIN,
  MINING_FETCH_CLAIM_SUCCESS,
  MINING_FETCH_CLAIM_FAILURE,
} from './constants';

export function fetchClaim({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_CLAIM_BEGIN,
      id: pool.id,
    });

    const promise = new Promise((resolve, reject) => {
      claimRewards({ web3, address, contractAddress: pool.earnContractAddress, dispatch })
        .then(data => {
          dispatch({
            type: MINING_FETCH_CLAIM_SUCCESS,
            data,
            id: pool.id,
          });
          resolve(data);
        })
        .catch(error => {
          dispatch({
            type: MINING_FETCH_CLAIM_FAILURE,
            id: pool.id,
          });
          reject(error.message || error);
        });
    });
    return promise;
  };
}

export function useFetchClaim() {
  const dispatch = useDispatch();

  const { fetchClaimPending } = useSelector(state => ({
    fetchClaimPending: state.mining.fetchClaimPending,
  }));

  const boundAction = useCallback(data => dispatch(fetchClaim(data)), [dispatch]);

  return {
    fetchClaim: boundAction,
    fetchClaimPending,
  };
}

export function reducer(state, action) {
  const { fetchClaimPending } = state;

  switch (action.type) {
    case MINING_FETCH_CLAIM_BEGIN:
      fetchClaimPending[action.id] = true;

      return {
        ...state,
        fetchClaimPending
      };

    case MINING_FETCH_CLAIM_SUCCESS:
      fetchClaimPending[action.id] = false;

      return {
        ...state,
        fetchClaimPending
      };

    case MINING_FETCH_CLAIM_FAILURE:
      fetchClaimPending[action.id] = false;

      return {
        ...state,
        fetchClaimPending
      };

    default:
      return state;
  }
}
