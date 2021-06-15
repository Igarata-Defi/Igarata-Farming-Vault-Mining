import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { MultiCall } from 'eth-multicall';

import { getNetworkMulticall, getNetworkTokenShim } from 'features/helpers/getNetworkData';
import { erc20ABI } from 'features/configure'

import {
  MINING_FETCH_BALANCES_BEGIN,
  MINING_FETCH_BALANCES_SUCCESS,
  MINING_FETCH_BALANCES_FAILURE,
} from './constants';

export function fetchBalances(data) {
  return dispatch => {
    dispatch({
      type: MINING_FETCH_BALANCES_BEGIN,
      data: data.forceUpdate || false
    });

    const promise = new Promise((resolve, reject) => {
      const { address, web3, tokens, network } = data;

      const networkTokens = [];
      for (let key in tokens) {
        if (tokens[key].network == network) {
          networkTokens.push(tokens[key].tokenAddress);
        }
      }

      const multicall = new MultiCall(web3, getNetworkMulticall(network));

      const calls = networkTokens.map(token => {
        const tokenContract = new web3.eth.Contract(erc20ABI, token || getNetworkTokenShim(network));
        return {
          token: token || '',
          balance: tokenContract.methods.balanceOf(address),
        };
      });

      multicall
        .all([calls])
        .then(([results]) => {
          const balances = {};
          results.map(item => balances[item.token] = item.balance);

          const newTokens = {};

          for (let key in tokens) {
            const token = tokens[key];

            newTokens[key] = {
              ...token,
              tokenBalance: balances[token.tokenAddress || ''] || 0,
            }
          }

          dispatch({
            type: MINING_FETCH_BALANCES_SUCCESS,
            data: newTokens,
          });

          resolve();
        })
        .catch(error => {
          dispatch({
            type: MINING_FETCH_BALANCES_FAILURE,
          });

          return reject(error.message || error);
        });
    });

    return promise;
  };
}

export function useFetchBalances() {
  const dispatch = useDispatch();

  const { tokens, fetchBalancesDone, fetchBalancesPending } = useSelector(
    state => ({
      tokens: state.mining.tokens,
      fetchBalancesDone: state.mining.fetchBalancesDone,
      fetchBalancesPending: state.mining.fetchBalancesPending,
    }),
    shallowEqual,
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchBalances(data));
    },
    [dispatch],
  );

  return {
    tokens,
    fetchBalances: boundAction,
    fetchBalancesDone,
    fetchBalancesPending,
  };
}

export function reducer(state, action) {
  const { fetchBalancesDone } = state;

  switch (action.type) {
    case MINING_FETCH_BALANCES_BEGIN:
      return {
        ...state,
        fetchBalancesDone: action.data ? false : fetchBalancesDone,
        fetchBalancesPending: true,
      };

    case MINING_FETCH_BALANCES_SUCCESS:
      return {
        ...state,
        tokens: action.data,
        fetchBalancesDone: true,
        fetchBalancesPending: false,
      };

    case MINING_FETCH_BALANCES_FAILURE:
      return {
        ...state,
        fetchBalancesPending: false,
      };

    default:
      return state;
  }
}