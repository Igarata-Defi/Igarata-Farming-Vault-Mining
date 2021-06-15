import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  MINING_FETCH_CONTRACT_APY_BEGIN,
  MINING_FETCH_CONTRACT_APY_SUCCESS,
  MINING_FETCH_CONTRACT_APY_FAILURE,
} from './constants';
import { fetchBalance } from "../../web3";



// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function fetchContractApy() {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: MINING_FETCH_CONTRACT_APY_BEGIN,
    });

  };
}

export function useFetchContractApy() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  let apyDict = {};

  const { contractApy, fetchContractApyPending } = useSelector(
    state => ({
      contractApy: {betheth:3},
      fetchContractApyPending: state.mining.fetchContractApyPending,
    }),
    shallowEqual,
  );

  const boundAction = useCallback(
    () => {
      dispatch(fetchContractApy());
    },
    [dispatch],
  );

  return {
    contractApy,
    fetchContractApy: boundAction,
    fetchContractApyPending,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MINING_FETCH_CONTRACT_APY_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchContractApyPending: true,
      };

    case MINING_FETCH_CONTRACT_APY_SUCCESS:
      // The request is success
      return {
        ...state,
        contractApy: action.data,
        fetchContractApyPending: false,
      };

    case MINING_FETCH_CONTRACT_APY_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchContractApyPending: false,
      };

    default:
      return state;
  }
}
