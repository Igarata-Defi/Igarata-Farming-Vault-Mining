import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  VAULT_FETCH_APPROVAL_BEGIN,
  VAULT_FETCH_APPROVAL_SUCCESS,
  VAULT_FETCH_APPROVAL_FAILURE,
} from './constants';
import { approval } from "../../web3";

export function fetchApproval({ address, web3, pool, tokenAddress }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_APPROVAL_BEGIN,
      id: pool.id
    });

    const promise = new Promise((resolve, reject) => {
      const contractAddress = pool.earnContractAddress;

      approval({
        web3,
        address,
        tokenAddress,
        contractAddress,
        dispatch
      }).then(
        data => {
          dispatch({
            type: VAULT_FETCH_APPROVAL_SUCCESS,
            data: {token: tokenAddress, allowance: data},
            id: pool.id
          })
          resolve();
        }
      ).catch(
        error => {
          dispatch({
            type: VAULT_FETCH_APPROVAL_FAILURE,
            id: pool.id
          })
          reject(error.message || error);
        }
      )
    });

    return promise;
  };
}

export function useFetchApproval() {
  const dispatch = useDispatch();

  const { fetchApprovalPending } = useSelector(
    state => ({
      fetchApprovalPending: state.vault.fetchApprovalPending,
    })
  );

  const boundAction = useCallback(data => dispatch(fetchApproval(data)), [dispatch]);

  return {
    fetchApproval: boundAction,
    fetchApprovalPending,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case VAULT_FETCH_APPROVAL_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchApprovalPending: {
          ...state.fetchApprovalPending,
          [action.id]: true
        },
      };

    case VAULT_FETCH_APPROVAL_SUCCESS:
      const { pools } = state;

      const newPools = pools.map(pool => {
        if (pool.id == action.id) {
          const allowance = pool.isMultiToken
            ? {
                ...pool.allowance,
                [action.data.token]: action.data.allowance
              }
            : action.data.allowance;

          return {
            ...pool,
            allowance
          }
        }

        return pool;
      })

      return {
        ...state,
        pools: newPools,
        fetchApprovalPending: {
          ...state.fetchApprovalPending,
          [action.id]: false
        },
      };

    case VAULT_FETCH_APPROVAL_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchApprovalPending: {
          ...state.fetchApprovalPending,
          [action.id]: false
        },
      };

    default:
      return state;
  }
}