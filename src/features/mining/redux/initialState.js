import { pools, categories } from "../../configure/mining";
import { defaultFilters } from './fetchFilters';

const tokens = {};

pools.map(({network, token, tokenAddress, isMultiToken, tokens: poolTokens, earnedToken, earnedTokenAddress})=> {
  if (isMultiToken) {
    poolTokens.map(token => {
      tokens[token.token] = {
        network: network,
        tokenAddress: token.address,
        tokenBalance: 0
      }
    })
  } else {
    tokens[token] = {
      network: network,
      tokenAddress: tokenAddress,
      tokenBalance: 0
    }
  }

  if (earnedTokenAddress != tokenAddress) {
    tokens[earnedToken] = {
      network: network,
      tokenAddress: earnedTokenAddress,
      tokenBalance: 0
    }
  }
  return '';
})

const getInitialFilters = () => {
  try {
    const serialized = localStorage.getItem('mining_filters');
    const filters = JSON.parse(serialized);

    if (filters) {
      return {
        ...defaultFilters,
        ...filters
      }
    }
  } catch (e) {}

  return defaultFilters;
}

const initialState = {
  categories,
  pools,
  tokens,
  filters: getInitialFilters(),
  pendingRewards: {},
  contractApy: {},
  farmAllowance: {},
  fetchContractApyPending: false,
  fetchPoolBalancesDone: false,
  fetchPoolBalancesPending: false,
  fetchBalancesDone: false,
  fetchBalancesPending: false,
  fetchFarmsStakedDone: false,
  fetchFarmsStakedPending: false,
  fetchFarmClaimPending: {},
  fetchFarmStakePending: {},
  fetchFarmUnstakePending: {},
  fetchApprovalPending: {},
  fetchFarmAllowanceDone: {},
  fetchPoolRewardsDone: {},
  fetchPoolRewardsPending: {},
  fetchFarmAllowancePending: {},
  fetchFarmApprovalPending: {},
  fetchClaimPending: {},
  fetchDepositPending: {},
  fetchWithdrawPending: {},
};

export default initialState;