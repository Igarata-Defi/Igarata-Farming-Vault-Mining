import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { erc20ABI } from "../../configure";

import { fetchAllowance } from "../../web3";

import {
  VAULT_FETCH_FARM_ALLOWANCE_BEGIN,
  VAULT_FETCH_FARM_ALLOWANCE_SUCCESS,
  VAULT_FETCH_FARM_ALLOWANCE_FAILURE,
} from './constants';

export function fetchFarmAllowance({ address, web3, pool }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_FARM_ALLOWANCE_BEGIN,
      id: pool.id
    });

    const promise = new Promise((resolve, reject) => {
      const contract = new web3.eth.Contract(erc20ABI, pool.earnedTokenAddress);

      fetchAllowance({
        web3,
        contractAddress: pool.farm.earnContractAddress,
        contract,
        address
      }).then(data => {
          dispatch({
            type: VAULT_FETCH_FARM_ALLOWANCE_SUCCESS,
            data: data,
            id: pool.id
          })

          resolve();
        }
      ).catch(error => {
          dispatch({
            type: VAULT_FETCH_FARM_ALLOWANCE_FAILURE,
            id: pool.id
          })

          reject(error.message || error);
        }
      )
    });

    return promise;
  };
}

export function useFetchFarmAllowance() {
  const dispatch = useDispatch();

  const { farmAllowance, fetchFarmAllowanceDone, fetchFarmAllowancePending } = useSelector(
    state => ({
      farmAllowance: state.vault.farmAllowance,
      fetchFarmAllowanceDone: state.vault.fetchFarmAllowanceDone,
      fetchFarmAllowancePending: state.vault.fetchFarmAllowancePending
    })
  );

  const boundAction = useCallback(data => dispatch(fetchFarmAllowance(data)), [dispatch]);

  return {
    farmAllowance,
    fetchFarmAllowance: boundAction,
    fetchFarmAllowanceDone,
    fetchFarmAllowancePending,
  };
}

export function reducer(state, action) {
  const { farmAllowance, fetchFarmAllowanceDone, fetchFarmAllowancePending } = state;

  switch (action.type) {
    case VAULT_FETCH_FARM_ALLOWANCE_BEGIN:
      fetchFarmAllowancePending[action.id] = true;

      return {
        ...state,
        fetchFarmAllowancePending,
      };

    case VAULT_FETCH_FARM_ALLOWANCE_SUCCESS:
      farmAllowance[action.id] = action.data;
      fetchFarmAllowanceDone[action.id] = true;
      fetchFarmAllowancePending[action.id] = false;

      return {
        ...state,
        farmAllowance,
        fetchFarmAllowanceDone,
        fetchFarmAllowancePending,
      };

    case VAULT_FETCH_FARM_ALLOWANCE_FAILURE:
      fetchFarmAllowancePending[action.id] = false;

      return {
        ...state,
        fetchFarmAllowancePending,
      };

    default:
      return state;
  }
}