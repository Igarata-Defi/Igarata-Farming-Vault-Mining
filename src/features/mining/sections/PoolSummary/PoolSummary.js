import React from 'react';
import { createUseStyles } from 'react-jss';
import millify from 'millify';
import { formatDecimals } from 'features/helpers/bignumber';

import { networks } from 'features/configure';

import Loader from 'components/Loader/Loader';

import { ChevronDoubleUpIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const PoolSummary = ({ pool, tokenBalance, depositedBalance, fetchBalanceDone, isActiveNetwork, onClick, isBoosted }) => {
  const classes = useStyles();

  const units = ['', 'K', 'M', 'B', 'T', 'Q', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion',
    'Decillion', 'Undecillion'];

  const poolNetwork = networks.find(network => pool.network == network.name);
  const isCompounding = pool.earnContractAddress && ( ! pool.claimable || pool.id == 'bfusd');

  const getApy = pool => {
    if (pool.apy === undefined) {
      return "";
    }

    const miningApy = pool.apy;
    try {
      return millify(miningApy, { units });
    } catch {
      return Number.parseFloat(miningApy).toExponential(2);
    }
  }

  const getAprd = pool => {
    let miningAprd = isCompounding
      ? pool.aprd
      : pool.apy / 365;

    if (miningAprd === undefined || isNaN(miningAprd)) {
      return "";
    }

    if (['ELE', 'bfbnb'].includes(pool.id) && pool.farmStats) {
      miningAprd += pool.farmStats.aprl / 365;
    }

    try {
      return millify(miningAprd, { units });
    } catch {
      return "--"
    }
  }

  const getApyUnboosted = pool => {
    if (! isBoosted || ! pool.farmStats) {
      return getApy(pool);
    }

    let aprl = pool.farmStats.aprl;

    if (['ELE', 'bfbnb'].includes(pool.id)) {
      aprl = 0;
    }

    const apy = ((1 + ((pool.aprd - aprl / 365) / 100)) ** 365 - 1) * 100;

    try {
      return millify(apy, { units });
    } catch {
      return Number.parseFloat(aprl).toExponential(2);
    }
  }

  const getAprdUnboosted = pool => {
    if (! isBoosted || ! pool.farmStats) {
      return getAprd(pool);
    }

    let aprl = pool.farmStats.aprl;

    if (['ELE', 'bfbnb'].includes(pool.id)) {
      aprl = 0;
    }

    const aprd = pool.aprd - aprl / 365;

    return aprd > 0
      ? Math.round(aprd * 1000) / 1000
      : '';
  }

  return (
    <>
      {pool.isDiscontinued && (
        <div className={classes.discontinuedMessage}>
          <span>Discontinued</span>

          { pool.discontinuedMessage || '' }
        </div>
      )}

      <div className={classes.poolSummary + (pool.isDiscontinued ? ' discontinued' : '')} onClick={onClick}>
        <div className={classes.poolInfo}>
          <div className={classes.logo}>
            <img src={require(`../../../../images/${pool.image || pool.token + '-logo.svg'}`)} />
          </div>

          <div className={classes.nameBlock}>
            <p className={classes.name}>{pool.token}</p>
            <p className={classes.description}>{pool.uses}</p>
          </div>
        </div>

        {isActiveNetwork && (
          <>
            <div className={classes.counter}>
              <p>
                { fetchBalanceDone
                  ? formatDecimals(tokenBalance)
                  : (<Loader />) }
              </p>
              <p>Balance</p>
            </div>

            <div className={classes.counter}>
              <p>
                { depositedBalance !== null
                  ? formatDecimals(depositedBalance)
                  : (<Loader />)}
              </p>
              <p>Deposited</p>
            </div>
          </>
        )}

        {! isActiveNetwork && (
          <div className={classes.networkSwitch}>
            Available on

            {poolNetwork && (
              <div className={classes.networkName}>
                <img src={require(`assets/img/networks/${poolNetwork.image}`)} />
                { poolNetwork.label }
              </div>
            )}
          </div>
        )}

        <div className={classes.counter + (isBoosted ? ' boosted' : '')}>
          <div>
            <p>
              {isBoosted && (<ChevronDoubleUpIcon />)}
              { getApy(pool) }%
            </p>
            <p>{ isCompounding ? 'APY' : 'APR' }</p>
          </div>

          {isBoosted && (
            <div className="old-value">{ getApyUnboosted(pool) }%</div>
          )}
        </div>

        <div className={classes.counter + (isBoosted ? ' boosted' : '')}>
          <div>
            <p>
              {isBoosted && (<ChevronDoubleUpIcon />)}
              { getAprd(pool) }%
            </p>
            <p>APRD</p>
          </div>

          {isBoosted && (
            <div className="old-value">{ getAprdUnboosted(pool) ? getAprdUnboosted(pool) + '%' : '' }</div>
          )}
        </div>

        <div className={classes.counter}>
          <p>{ pool.tvl ? '$' + millify(pool.tvl, { units }) : '-' }</p>
          <p>TVL</p>
        </div>
      </div>
    </>
  );

};

export default PoolSummary;