import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  MINING_FETCH_FARM_APPROVAL_BEGIN,
  MINING_FETCH_FARM_APPROVAL_SUCCESS,
  MINING_FETCH_FARM_APPROVAL_FAILURE,
} from './constants';
import { approval } from "../../web3";

export function fetchFarmApproval({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_FARM_APPROVAL_BEGIN,
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
            type: MINING_FETCH_FARM_APPROVAL_SUCCESS,
            data: data,
            id: pool.id
          })

          resolve();
        }
      ).catch(error => {
          dispatch({
            type: MINING_FETCH_FARM_APPROVAL_FAILURE,
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
      fetchFarmApprovalPending: state.mining.fetchFarmApprovalPending,
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
    case MINING_FETCH_FARM_APPROVAL_BEGIN:
      fetchFarmApprovalPending[action.id] = true;

      return {
        ...state,
        fetchFarmApprovalPending,
      };

    case MINING_FETCH_FARM_APPROVAL_SUCCESS:
      farmAllowance[action.id] = action.data;
      fetchFarmApprovalPending[action.id] = false;

      return {
        ...state,
        farmAllowance,
        fetchFarmApprovalPending,
      };

    case MINING_FETCH_FARM_APPROVAL_FAILURE:
      fetchFarmApprovalPending[action.id] = false;

      return {
        ...state,
        fetchFarmApprovalPending,
      };

    default:
      return state;
  }
}