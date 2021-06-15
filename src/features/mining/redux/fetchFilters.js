import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';

import {
  MINING_FILTERS_SET_NETWORKS,
  MINING_FILTERS_SET_CATEGORIES,
  MINING_FILTERS_SET_DEPOSITED,
  MINING_FILTERS_SET_WITH_BALANCE,
  MINING_FILTERS_SET_SEARCH_PHRASE,
  MINING_FILTERS_SET_SORT,
  MINING_FILTERS_RESET
} from './constants';

export const defaultFilters = {
  networks: [],
  categories: [],
  searchPhrase: '',
  deposited: false,
  withBalance: false,
  sort: 'default'
};

const setNetworksFilter = (networks) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_NETWORKS,
      data: networks
    });
  }
}

const setCategoriesFilter = (categories) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_CATEGORIES,
      data: categories
    });
  }
}

const setDepositedFilter = (value) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_DEPOSITED,
      data: value
    });
  }
}

const setWithBalanceFilter = (value) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_WITH_BALANCE,
      data: value
    });
  }
}

const setSearchPhrase = (value) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_SEARCH_PHRASE,
      data: value
    });
  }
}

const setSort = (value) => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_SET_SORT,
      data: value
    });
  }
}

const resetFilters = () => {
  return dispatch => {
    dispatch({
      type: MINING_FILTERS_RESET
    });
  }
}

const getFilteredPools = (pools, tokens, filters, categories) => {
  if (! pools) {
    return;
  }

  let filteredPools = [...pools];

  // Filter by name
  if (filters.searchPhrase) {
    const phrase = filters.searchPhrase.toLowerCase();
    filteredPools = filteredPools.filter(pool => pool.token.toLowerCase().includes(phrase));
  }

  // Filter by deposited
  if (filters.deposited) {
    filteredPools = filteredPools.filter(pool => {
      return tokens[pool.earnedToken]?.tokenBalance > 0
        || pool.stakedAmount?.gt(0);
    });
  }

  // Filter by tokens with non-zero balance
  if (filters.withBalance) {
    filteredPools = filteredPools.filter(pool => {
      return tokens[pool.token]?.tokenBalance > 0
        || tokens[pool.earnedToken]?.tokenBalance > 0
        || pool.stakedAmount?.gt(0);
    });
  }

  // Filter by network
  if (filters.networks.length) {
    filteredPools = filteredPools.filter(pool => filters.networks.includes(pool.network));
  }

  // Filter by categories
  if (filters.categories.length) {
    filteredPools = filteredPools.filter(pool => {
      return _.intersection(pool.categories || [], filters.categories).length > 0;
    });
  } else {
    // Show all pools without category or in categories active by default
    const defaultCategories = categories.filter(category => category.default).map(category => category.name);

    filteredPools = filteredPools.filter(pool => {
      return ! pool.categories?.length || _.intersection(pool.categories, defaultCategories).length > 0;
    });
  }

  // Sort pools
  switch (filters.sort) {
    case 'apy':
      filteredPools = _.orderBy(filteredPools, pool => pool.apy || 0, 'desc');
      break;
    case 'apd':
      filteredPools = _.orderBy(filteredPools, pool => pool.aprd || 0, 'desc');
      break;
    case 'tvl':
      filteredPools = _.orderBy(filteredPools, pool => pool.tvl || 0, 'desc');
      break;
  }

  return filteredPools;
}

export function useFetchFilters(pools, tokens) {
  const dispatch = useDispatch();

  const { filters, categories } = useSelector(
    state => ({
      filters: state.mining.filters,
      categories: state.mining.categories
    }),
    shallowEqual
  );

  const setNetworksAction = useCallback(data => dispatch(setNetworksFilter(data)), [dispatch]);
  const setCategoriesAction = useCallback(data => dispatch(setCategoriesFilter(data)), [dispatch]);
  const setDepositedAction = useCallback(data => dispatch(setDepositedFilter(data)), [dispatch]);
  const setWithBalanceAction = useCallback(data => dispatch(setWithBalanceFilter(data)), [dispatch]);
  const setSearchPhraseAction = useCallback(data => dispatch(setSearchPhrase(data)), [dispatch]);
  const setSortAction = useCallback(data => dispatch(setSort(data)), [dispatch]);
  const resetFiltersAction = useCallback(data => dispatch(resetFilters(data)), [dispatch]);

  // Store current filters state in local storage
  try {
    localStorage.setItem('mining_filters', JSON.stringify({
      ...filters,
      searchPhrase: ''
    }));
  } catch (err) {}

  return {
    filters,
    filteredPools: getFilteredPools(pools, tokens, filters, categories),
    areFiltersDefault: JSON.stringify(filters) == JSON.stringify(defaultFilters),
    setNetworksFilter: setNetworksAction,
    setCategoriesFilter: setCategoriesAction,
    setDepositedFilter: setDepositedAction,
    setWithBalanceFilter: setWithBalanceAction,
    setSearchPhrase: setSearchPhraseAction,
    setSort: setSortAction,
    resetFilters: resetFiltersAction,
  }
}

export function reducer(state, action) {
  const { filters } = state;

  switch (action.type) {
    case MINING_FILTERS_SET_NETWORKS:
      return {
        ...state,
        filters: {
          ...filters,
          networks: action.data
        }
      }

    case MINING_FILTERS_SET_CATEGORIES:
      return {
        ...state,
        filters: {
          ...filters,
          categories: action.data
        }
      }

    case MINING_FILTERS_SET_DEPOSITED:
      return {
        ...state,
        filters: {
          ...filters,
          deposited: action.data
        }
      }

    case MINING_FILTERS_SET_WITH_BALANCE:
      return {
        ...state,
        filters: {
          ...filters,
          withBalance: action.data
        }
      }

    case MINING_FILTERS_SET_SEARCH_PHRASE:
      return {
        ...state,
        filters: {
          ...filters,
          searchPhrase: action.data
        }
      }

    case MINING_FILTERS_SET_SORT:
      return {
        ...state,
        filters: {
          ...filters,
          sort: action.data
        }
      }

    case MINING_FILTERS_RESET:
      return {
        ...state,
        filters: defaultFilters,
      }

    default:
      return state;
  }
}