import initialState from './initialState';
import { reducer as fetchBalancesReducer } from './fetchBalances';
import { reducer as fetchPoolBalancesReducer } from './fetchPoolBalances';
import { reducer as fetchApprovalReducer } from './fetchApproval';
import { reducer as fetchDepositReducer } from './fetchDeposit';
import { reducer as fetchWithdrawReducer } from './fetchWithdraw';
import { reducer as fetchContractApyReducer } from './fetchContractApy';
import { reducer as fetchPendingRewardsReducer } from './fetchPendingRewards';
import { reducer as fetchPoolRewardsReducer } from './fetchPoolRewards';
import { reducer as fetchClaimReducer } from './fetchClaim';
import { reducer as fetchFarmAllowanceReducer } from './fetchFarmAllowance';
import { reducer as fetchFarmApprovalReducer } from './fetchFarmApproval';
import { reducer as fetchFarmsStakedReducer } from './fetchFarmsStaked';
import { reducer as fetchFarmClaimReducer } from './fetchFarmClaim';
import { reducer as fetchFarmStakeReducer } from './fetchFarmStake';
import { reducer as fetchFarmUnstakeReducer } from './fetchFarmUnstake';
import { reducer as fetchFiltersReducer } from './fetchFilters';

const reducers = [
  fetchBalancesReducer,
  fetchPoolBalancesReducer,
  fetchApprovalReducer,
  fetchDepositReducer,
  fetchWithdrawReducer,
  fetchContractApyReducer,
  fetchPendingRewardsReducer,
  fetchClaimReducer,
  fetchFarmAllowanceReducer,
  fetchFarmApprovalReducer,
  fetchFarmsStakedReducer,
  fetchFarmClaimReducer,
  fetchFarmStakeReducer,
  fetchFarmUnstakeReducer,
  fetchPoolRewardsReducer,
  fetchFiltersReducer
];


export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}