import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  VAULT_FETCH_DEPOSIT_BEGIN,
  VAULT_FETCH_DEPOSIT_SUCCESS,
  VAULT_FETCH_DEPOSIT_FAILURE,
} from './constants';
import { deposit, depositNativeToken, depositMultiToken } from "../../web3";

export function fetchDeposit({ address, web3, isAll, amount, contractAddress, index }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_DEPOSIT_BEGIN,
      index
    });

    const promise = new Promise((resolve, reject) => {
      deposit({ web3, address, isAll, amount, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_SUCCESS,
            data, index
          });
          resolve(data);
        },
      ).catch(
        error => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function fetchDepositNativeToken({ address, web3, amount, contractAddress, index }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_DEPOSIT_BEGIN,
      index
    });

    const promise = new Promise((resolve, reject) => {
      depositNativeToken({ web3, address, amount, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_SUCCESS,
            data, index
          });
          resolve(data);
        },
      ).catch(
        // Use rejectHandler as the second argument so that render errors won't be caught.
        error => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function fetchDepositMultiToken({ address, web3, amounts, contractAddress, index }) {
  return dispatch => {
    dispatch({
      type: VAULT_FETCH_DEPOSIT_BEGIN,
      index
    });

    const promise = new Promise((resolve, reject) => {
      depositMultiToken({ web3, address, amounts, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_SUCCESS,
            data, index
          });
          resolve(data);
        },
      ).catch(
        // Use rejectHandler as the second argument so that render errors won't be caught.
        error => {
          dispatch({
            type: VAULT_FETCH_DEPOSIT_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function useFetchDeposit() {
  const dispatch = useDispatch();

  const { fetchDepositPending } = useSelector(
    state => ({
      fetchDepositPending: state.vault.fetchDepositPending,
    })
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchDeposit(data));
    },
    [dispatch],
  );

  const boundAction2 = useCallback(
    (data) => {
      return dispatch(fetchDepositNativeToken(data));
    },
    [dispatch],
  );

  const fetchDepositMultiTokenAction = useCallback(data => dispatch(fetchDepositMultiToken(data)), [dispatch]);

  return {
    fetchDeposit: boundAction,
    fetchDepositNativeToken: boundAction2,
    fetchDepositMultiToken: fetchDepositMultiTokenAction,
    fetchDepositPending
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case VAULT_FETCH_DEPOSIT_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchDepositPending: {
          ...state.fetchDepositPending,
          [action.index]: true
        },
      };

    case VAULT_FETCH_DEPOSIT_SUCCESS:
      // The request is success
      return {
        ...state,
        fetchDepositPending: {
          ...state.fetchDepositPending,
          [action.index]: false
        },
      };

    case VAULT_FETCH_DEPOSIT_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchDepositPending: {
          ...state.fetchDepositPending,
          [action.index]: false
        },
      };

    default:
      return state;
  }
}