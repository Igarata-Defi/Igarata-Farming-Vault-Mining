import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  VAULT_FETCH_FARM_APPROVAL_BEGIN,
  VAULT_FETCH_FARM_APPROVAL_SUCCESS,
  VAULT_FETCH_FARM_APPROVAL_FAILURE,
} from './constants';
import { approval } from "../../web3";

export function fetchFarmApproval({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_FARM_APPROVAL_BEGIN,
      id: pool.id
    });

    const promise = new Promise((resolve, reject) => {
      approval({
        web3,
        address,
        tokenAddress: pool.earnedTokenAddress,
        contractAddress: pool.farm.earnContractAddress,
        dispatch
      }).then(data => {
          dispatch({
            type: VAULT_FETCH_FARM_APPROVAL_SUCCESS,
            data: data,
            id: pool.id
          })

          resolve();
        }
      ).catch(error => {
          dispatch({
            type: VAULT_FETCH_FARM_APPROVAL_FAILURE,
            id: pool.id
          })

          reject(error.message || error);
        }
      )
    });

    return promise;
  };
}

export function useFetchFarmApproval() {
  const dispatch = useDispatch();

  const { fetchFarmApprovalPending } = useSelector(
    state => ({
      fetchFarmApprovalPending: state.vault.fetchFarmApprovalPending,
    })
  );

  const boundAction = useCallback(data => dispatch(fetchFarmApproval(data)), [dispatch]);

  return {
    fetchFarmApproval: boundAction,
    fetchFarmApprovalPending,
  };
}

export function reducer(state, action) {
  const { farmAllowance, fetchFarmApprovalPending } = state;

  switch (action.type) {
    case VAULT_FETCH_FARM_APPROVAL_BEGIN:
      fetchFarmApprovalPending[action.id] = true;

      return {
        ...state,
        fetchFarmApprovalPending,
      };

    case VAULT_FETCH_FARM_APPROVAL_SUCCESS:
      farmAllowance[action.id] = action.data;
      fetchFarmApprovalPending[action.id] = false;

      return {
        ...state,
        farmAllowance,
        fetchFarmApprovalPending,
      };

    case VAULT_FETCH_FARM_APPROVAL_FAILURE:
      fetchFarmApprovalPending[action.id] = false;

      return {
        ...state,
        fetchFarmApprovalPending,
      };

    default:
      return state;
  }
}