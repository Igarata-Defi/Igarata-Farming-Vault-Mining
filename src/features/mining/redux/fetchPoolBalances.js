import { useCallback } from 'react';
import { earnContractABI, erc20ABI } from "../../configure";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import BigNumber from 'bignumber.js';
import { MultiCall } from 'eth-multicall';

import { getNetworkMulticall, getNetworkTokenShim } from 'features/helpers/getNetworkData';
import { byDecimals } from 'features/helpers/bignumber';

import bigfootBnbBankABI from '../../configure/abis/bigfootBnbBank';
import bigfootUsdBankABI from '../../configure/abis/bigfootUsdBank';

import {
  MINING_FETCH_POOL_BALANCES_BEGIN,
  MINING_FETCH_POOL_BALANCES_SUCCESS,
  MINING_FETCH_POOL_BALANCES_FAILURE,
} from './constants';

export function fetchPoolBalances(data) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: MINING_FETCH_POOL_BALANCES_BEGIN,
      data: data.forceUpdate || false
    });

    const promise = new Promise((resolve, reject) => {
      const { address, web3, pools, network } = data;
      const earnPools = pools.filter(pool => pool.earnContractAddress && pool.network == network);

      const tokenCalls = earnPools.map(pool => {
        const tokens = pool.isMultiToken
          ? pool.tokens.map(token => token.address)
          : [pool.tokenAddress];

        return tokens.map(token => {
          const contract = new web3.eth.Contract(erc20ABI, token || getNetworkTokenShim(network));

          return {
            pool: pool.earnContractAddress,
            token: token || '',
            allowance: contract.methods.allowance(address, pool.earnContractAddress)
          };
        });
      }).flat();

      const miningCalls = earnPools.map(pool => {
        let pricePerShareCall;

        // Calculate price per share from total supply for Bigfoot banks
        if (pool.earnContractAddress == '0xA96C90223e4cC69192A9ffF1BA4c8b86D02765B2') {
          const contract = new web3.eth.Contract(bigfootBnbBankABI, pool.earnContractAddress);

          return {
            totalDeposited: contract.methods.totalBNB(),
            totalSupply: contract.methods.totalSupply()
          }
        }

        if (pool.id == 'bfusd') {
          const contract = new web3.eth.Contract(bigfootUsdBankABI, pool.earnContractAddress);

          return {
            totalDeposited: contract.methods.total3Pool(),
            totalSupply: contract.methods.totalSupply()
          }
        }

        // Using a separate method for E11 token
        if (pool.earnContractAddress == '0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d') {
          const contract = new web3.eth.Contract([{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"shareToTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sharesPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"tokenToShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalElevenFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}], pool.earnContractAddress);
          pricePerShareCall = contract.methods.tokensPerShare();
        } else {
          const contract = new web3.eth.Contract(earnContractABI, pool.earnContractAddress);
          pricePerShareCall = contract.methods.getPricePerFullShare();
        }

        return {
          pricePerShare: pricePerShareCall
        }
      });

      const multicall = new MultiCall(web3, getNetworkMulticall(network));
      multicall.all([tokenCalls, miningCalls])
        .then(data => {
          const allowances = {};

          // Process pools allowances
          data[0].forEach(allowance => {
            allowances[allowance.pool] = {
              ...allowances[allowance.pool],
              [allowance.token]: new BigNumber(allowance.allowance).toNumber()
            }
          });

          const poolsData = {};

          pools.map(pool => {
            let allowance = 0;
            let pricePerFullShare = 1;

            const callIndex = earnPools.findIndex(earnPool => earnPool.id == pool.id);
            if (callIndex >= 0) {
              allowance = pool.isMultiToken
                ? allowances[pool.earnContractAddress]
                : allowances[pool.earnContractAddress][pool.tokenAddress || '']

              // Calculate price per share from total supply for Bigfoot Banks
              if (['bfbnb', 'bfusd'].includes(pool.id)) {
                pricePerFullShare = (new BigNumber(data[1][callIndex].totalDeposited))
                  .div(new BigNumber(data[1][callIndex].totalSupply));
              } else {
                const multiplier = pool.earnContractAddress == '0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d' ? 1e6 : 1;
                pricePerFullShare = byDecimals(data[1][callIndex].pricePerShare * multiplier, 18).toNumber() || 1;
              }
            }

            poolsData[pool.id] = { allowance, pricePerFullShare }
          })

          dispatch({
            type: MINING_FETCH_POOL_BALANCES_SUCCESS,
            data: poolsData,
          });

          resolve()
        })
        .catch(error => {
          dispatch({
            type: MINING_FETCH_POOL_BALANCES_FAILURE,
          });

          return reject(error.message || error);
        });
    });

    return promise;
  }
}


export function useFetchPoolBalances() {
  // args: false value or array
  // if array, means args passed to the action creator
  const dispatch = useDispatch();

  const { pools, fetchPoolBalancesDone, fetchPoolBalancesPending } = useSelector(
    state => ({
      pools: state.mining.pools,
      fetchPoolBalancesDone: state.mining.fetchPoolBalancesDone,
      fetchPoolBalancesPending: state.mining.fetchPoolBalancesPending,
    }),
    shallowEqual,
  );

  const boundAction = useCallback(
    (data) => {
      return dispatch(fetchPoolBalances(data));
    },
    [dispatch],
  );

  return {
    pools,
    fetchPoolBalances: boundAction,
    fetchPoolBalancesDone,
    fetchPoolBalancesPending
  };
}

export function reducer(state, action) {
  const { pools, fetchPoolBalancesDone } = state;

  switch (action.type) {
    case MINING_FETCH_POOL_BALANCES_BEGIN:
      return {
        ...state,
        fetchPoolBalancesDone: action.data ? false : fetchPoolBalancesDone,
        fetchPoolBalancesPending: true,
      };

    case MINING_FETCH_POOL_BALANCES_SUCCESS:
      const updatedPools = pools.map(pool => {
        if (! action.data[pool.id]) {
          return pool;
        }

        const { allowance, pricePerFullShare } = action.data[pool.id];
        return {
          ...pool,
          allowance,
          pricePerFullShare
        }
      });

      return {
        ...state,
        pools: updatedPools,
        fetchPoolBalancesDone: true,
        fetchPoolBalancesPending: false,
      };

    case MINING_FETCH_POOL_BALANCES_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchPoolBalancesPending: false,
      };

    default:
      return state;
  }
}
