import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Select from 'components/Select/Select';
import { CubeTransparentIcon, FilterIcon, SearchIcon, SortDescendingIcon } from '@heroicons/react/outline'
import { XCircleIcon } from '@heroicons/react/solid';

import { useFetchFilters, useFetchPoolsInfo } from '../../redux/hooks';

import styles from './styles.js';
const useStyles = createUseStyles(styles);

const Filters = () => {
  const classes = useStyles();
  const { categories } = useFetchPoolsInfo();
  const {
    filters,
    areFiltersDefault,
    setNetworksFilter,
    setCategoriesFilter,
    setDepositedFilter,
    setWithBalanceFilter,
    setSearchPhrase,
    setSort,
    resetFilters
  } = useFetchFilters();

  const [searchFieldActive, setSearchFieldActive] = useState(false);
  const searchInputRef = useRef();

  const networksOptions = [
    {value: 'bsc', name: 'Binance'},
    {value: 'polygon', name: 'Polygon'},
  ]

  const sortOptions = [
    {value: 'default', name: 'Default'},
    {value: 'apy', name: 'APY'},
    {value: 'tvl', name: 'TVL'},
  ]

  const onSortSelect = item => {
    setSort(item || 'default');
  }

  const onSearchFieldClick = () => {
    setSearchFieldActive(true);

    setTimeout(() => {
      searchInputRef.current.focus();
    }, 100);
  }

  const onSearchFieldChange = event => {
    setSearchPhrase(event.target.value);
  }

  const onSearchFieldBlur = event => {
    if (! event.target.value) {
      setSearchFieldActive(false);
    }
  }

  return (
    <>
      <div className={classes.filters}>
        <div>
          <div className={classes.selectsGroup}>
            <Select
              options={networksOptions}
              selected={filters.networks}
              multiple={true}
              placeholder="All networks"
              icon={<CubeTransparentIcon />}
              onChange={setNetworksFilter}
              className={classes.networksSelect}
            />

            <Select
              options={categories.map(item => ({value: item.name, name: item.name}))}
              selected={filters.categories}
              multiple={true}
              placeholder="All Groups"
              icon={<FilterIcon />}
              onChange={setCategoriesFilter}
              className={classes.categoriesSelect}
            />
          </div>

          <div className={classes.checkboxes}>
            <label className={classes.checkbox + (filters.withBalance ? ' active' : '')}>
              <input type="checkbox"
                checked={filters.withBalance}
                onChange={e => setWithBalanceFilter(e.target.checked)}
                name="with_balance"
              />

              Hide Zero Balances
            </label>

            <label className={classes.checkbox + (filters.deposited ? ' active' : '')}>
              <input type="checkbox"
                checked={filters.deposited}
                onChange={e => setDepositedFilter(e.target.checked)}
                name="deposited"
              />

              Deposited Only
            </label>
          </div>
        </div>

        <div>
          <div
            className={classes.search + (searchFieldActive ? ' open' : '')}
            onClick={onSearchFieldClick}
          >
            <SearchIcon />

            <input
              type="text"
              name="search_phrase"
              ref={searchInputRef}
              value={filters.searchPhrase}
              onChange={onSearchFieldChange}
              onBlur={onSearchFieldBlur}
            />
          </div>
          <Select
            options={sortOptions}
            selected={filters.sort}
            placeholder="Sort"
            icon={<SortDescendingIcon />}
            onChange={onSortSelect}
            className={classes.sortSelect}
          />
        </div>
      </div>

      {! areFiltersDefault && (
        <div className={classes.resetBlock}>
          <button
            className={classes.resetButton}
            onClick={resetFilters}
          >
            <XCircleIcon />
            Reset Filters
          </button>
        </div>
      )}
    </>
  );
};

export default Filters;