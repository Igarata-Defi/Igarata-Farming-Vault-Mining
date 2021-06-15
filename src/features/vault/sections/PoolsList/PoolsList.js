import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import NumberFormat from 'react-number-format';
import _ from 'lodash';

import Filters from '../Filters/Filters';
import Pool from '../Pool/Pool';

import { useConnectWallet } from '../../../home/redux/hooks';
import {
  useFetchBalances,
  useFetchFilters,
  useFetchPoolBalances,
  useFetchPoolsInfo,
  useFetchFarmsStaked
} from '../../redux/hooks';

import styles from './styles.js';
const useStyles = createUseStyles(styles);

export default function PoolsList({ filtersCategory }) {
  const { t } = useTranslation();
  const classes = useStyles();

  const { web3, address, network } = useConnectWallet();
  let { pools, fetchPoolBalances, fetchPoolBalancesDone } = useFetchPoolBalances();
  const { categories } = useFetchPoolsInfo();
  const { tokens, fetchBalances, fetchBalancesDone } = useFetchBalances();
  const { fetchFarmsStaked, fetchFarmsStakedDone } = useFetchFarmsStaked();
  const { filteredPools, setCategoriesFilter } = useFetchFilters(pools, tokens);

  const [fetchPoolDataDone, setFetchPoolDataDone] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (filtersCategory) {
      categories.forEach(category => {
        if (category.name.toLowerCase() == filtersCategory.toLowerCase()) {
          setCategoriesFilter([category.name]);
        }
      })
    }

    loadData();
  }, []);

  useEffect(() => {
    setFetchPoolDataDone(fetchPoolBalancesDone && fetchFarmsStakedDone);
  }, [fetchPoolBalancesDone, fetchFarmsStakedDone])

  const loadData = async () => {
    const response = await fetch("https://eleven.finance/api.json");
    const json = await response.json();

    const normalizedData = pools.map((pool) => {
      let token = pool.token;
      let vault = json[token]?.vault;
      let tvl = json[token]?.tvl;
      pool["vault"] = vault;
      pool["tvl"] = tvl;
      pool['price'] = json[token]?.price;
      pool['farmStats'] = json[token]?.farm;

      if (pool.id == 'elebnb' && json[token]) {
        pool.farmStats = {
          apy: json[token].apy
        }
      }

      const poolStats = pool.claimable && pool.id != 'bfusd'
        ? pool.vault
        : pool.farmStats;

      pool.apy = poolStats?.apy;
      pool.apr = poolStats?.apr;
      pool.aprd = poolStats?.aprd;

      return pool;
    });

    normalizedData["totalvaluelocked"] = json["totalvaluelocked"]

    setData(normalizedData);
  }

  useEffect(() => {
    const fetch = (forceUpdate = false) => {
      if (address && web3 && network) {
        fetchBalances({ address, web3, tokens, network, forceUpdate });
        fetchPoolBalances({ address, web3, pools, network, forceUpdate });
        fetchFarmsStaked({ address, web3, pools, network, forceUpdate });
      }
    }

    fetch(true);

    const id = setInterval(fetch, 15000);
    return () => clearInterval(id);
  }, [address, web3, network, fetchBalances, fetchPoolBalances]);

  return (
    <>
      <h2 className={classes.h2}>{t('Vault-Main-Title')}</h2>
      <h3 className={classes.h3}>
        TVL: <NumberFormat value={data.totalvaluelocked} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={0} />
      </h3>

      <Filters />

      {/* Pools */}
      <div className={classes.pools}>
        {filteredPools.map((pool, index) => {
          return (
            <Pool key={pool.id}
              pool={pool}
              index={index}
              tokens={tokens}
              fetchBalancesDone={fetchBalancesDone}
              fetchPoolDataDone={fetchPoolDataDone}
            />
          )
        })}
      </div>
    </>
  )
}