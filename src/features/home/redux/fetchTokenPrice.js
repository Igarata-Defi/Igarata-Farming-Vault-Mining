import BigNumber from 'bignumber.js';
import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchUniswapOutputAmount } from '../../web3';

import { HOME_FETCH_TOKEN_PRICE_SUCCESS } from './constants';

export function fetchTokenPrice({ web3, network }) {
  return dispatch => {
    switch (network) {
      case 'bsc':
        fetchOutputAmount({
          web3,
          dispatch,
          routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // PancakeSwap
          path: [
            '0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0', // ELE
            '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // BNB
            '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
          ],
          outputTokenDecimals: 18,
        })
        break;

      case 'polygon':
        fetchOutputAmount({
          web3,
          dispatch,
          routerAddress: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', // SushiSwap
          path: [
            '0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0', // ELE
            '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
            '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // USDC
          ],
          outputTokenDecimals: 6,
        });

        break;

      default:
        dispatch({
          type: HOME_FETCH_TOKEN_PRICE_SUCCESS,
          data: null,
        })
    }
  }
}

const fetchOutputAmount = ({ web3, dispatch, routerAddress, path, outputTokenDecimals }) => {
  const amountIn = new BigNumber(10).exponentiatedBy(18).toString();

  fetchUniswapOutputAmount({ web3, routerAddress, amountIn, path})
    .then(tokenPrice => {
      dispatch({
        type: HOME_FETCH_TOKEN_PRICE_SUCCESS,
        data: tokenPrice.dividedBy(new BigNumber(10).exponentiatedBy(outputTokenDecimals))
      })
    });
}


export function useFetchTokenPrice() {
  const dispatch = useDispatch();

  const { tokenPriceUsd, fetchTokenPriceDone } = useSelector(
    state => ({
      tokenPriceUsd: state.home.tokenPriceUsd,
      fetchTokenPriceDone: state.home.fetchTokenPriceDone
    }),
    shallowEqual
  )

  const fetchPriceAction = useCallback(data => dispatch(fetchTokenPrice(data)), [dispatch]);

  return {
    tokenPriceUsd,
    fetchTokenPrice: fetchPriceAction,
    fetchTokenPriceDone,
  }
};

export function reducer(state, action) {
  switch (action.type) {
    case HOME_FETCH_TOKEN_PRICE_SUCCESS:
      return {
        ...state,

        tokenPriceUsd: action.data,
        fetchTokenPriceDone: true,
      }

    default:
      return state;
  }
}