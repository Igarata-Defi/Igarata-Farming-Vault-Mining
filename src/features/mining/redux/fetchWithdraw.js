import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  MINING_FETCH_WITHDRAW_BEGIN,
  MINING_FETCH_WITHDRAW_SUCCESS,
  MINING_FETCH_WITHDRAW_FAILURE,
} from './constants';
import { withdraw, withdrawNativeToken, withdrawMultiToken } from "../../web3";

export function fetchWithdraw({ address, web3, isAll, amount, contractAddress, index }) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: MINING_FETCH_WITHDRAW_BEGIN,
      index
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      withdraw({ web3, address, isAll, amount, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_SUCCESS,
            data, index
          });
            resolve(data);
          },
      ).catch(
          // Use rejectHandler as the second argument so that render errors won't be caught.
        error => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function fetchWithdrawNativeToken({ address, web3, amount, contractAddress, index }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_WITHDRAW_BEGIN,
      index
    });

    const promise = new Promise((resolve, reject) => {
      withdrawNativeToken({ web3, address, amount, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_SUCCESS,
            data, index
          });
            resolve(data);
          },
      ).catch(
        error => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function fetchWithdrawMultiToken({ address, web3, amount, tokenIndex, contractAddress, index }) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_WITHDRAW_BEGIN,
      index
    });

    const promise = new Promise((resolve, reject) => {
      withdrawMultiToken({ web3, address, amount, tokenIndex, contractAddress, dispatch }).then(
        data => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_SUCCESS,
            data, index
          });
            resolve(data);
          },
      ).catch(
        error => {
          dispatch({
            type: MINING_FETCH_WITHDRAW_FAILURE,
            index
          });
          reject(error.message || error);
        }
      )
    });
    return promise;
  };
}

export function useFetchWithdraw() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { fetchWithdrawPending } = useSelector(
    state => ({
      fetchWithdrawPending: state.mining.fetchWithdrawPending,
    })
  );

  const boundAction = useCallback(
    (data) => dispatch(fetchWithdraw(data)),
    [dispatch],
  );

  const boundAction2 = useCallback(
    (data) => dispatch(fetchWithdrawNativeToken(data)),
    [dispatch],
  );

  const withdrawMultiTokenAction = useCallback(data => dispatch(fetchWithdrawMultiToken(data)), [dispatch]);

  return {
    fetchWithdraw: boundAction,
    fetchWithdrawNativeToken: boundAction2,
    fetchWithdrawMultiToken: withdrawMultiTokenAction,
    fetchWithdrawPending
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case MINING_FETCH_WITHDRAW_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchWithdrawPending: {
          ...state.fetchWithdrawPending,
          [action.index]: true
        },
      };

    case MINING_FETCH_WITHDRAW_SUCCESS:
      // The request is success
      return {
        ...state,
        fetchWithdrawPending: {
          ...state.fetchWithdrawPending,
          [action.index]: false
        },
      };

    case MINING_FETCH_WITHDRAW_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchWithdrawPending: {
          ...state.fetchWithdrawPending,
          [action.index]: false
        },
      };

    default:
      return state;
  }
}