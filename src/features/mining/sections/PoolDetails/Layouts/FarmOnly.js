import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { formatDecimals } from 'features/helpers/bignumber';

import Grid from '@material-ui/core/Grid';
import Loader from 'components/Loader/Loader';

import FarmClaimButton from '../Buttons/FarmClaimButton';
import StakeButton from '../Buttons/StakeButton';
import UnstakeButton from '../Buttons/UnstakeButton';
import Step from './Step/Step';

import styles from './styles';
const useStyles = createUseStyles(styles);

const FarmOnly = ({ pool, index, tokenBalance, stakedBalance, pendingRewards, pendingRewardsLoaded }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {/* Tokens Balance */}
      <Grid item xs={12} sm={6} lg={4}>
        <Step number={1} label={'Stake in Farm'} />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>{formatDecimals(tokenBalance)}</div>
          {pool.price && (
            <div className={classes.balanceSecondary}>${tokenBalance.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Deposited')}</div>

          {!pool.isDiscontinued && (
            <StakeButton pool={pool} index={index} balance={tokenBalance} />
          )}
        </div>
      </Grid>

      {/* Deposited Balance */}
      <Grid item xs={12} sm={6} lg={4}>
        <Step />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>{formatDecimals(stakedBalance)}</div>
          {pool.price && (
            <div className={classes.balanceSecondary}>${stakedBalance.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Staked')}</div>

          <UnstakeButton pool={pool} index={index} balance={stakedBalance} />
        </div>
      </Grid>

      {/* Farm Earnings */}
      <Grid item xs={12} lg={4}>
        <Step number={2} label={'Harvest the Rewards'} />

        <div className={classes.detailsSection}>
          <div className={classes.balanceWithLogo + (pool.price ? ' ' + classes.balanceWithPadding : '')}>
            <div className={classes.balanceLogo}>
              <img src={require(`images/${pool.farm.earnedToken}-logo.png`)}/>
            </div>
            <div>
              <div className={classes.balance}>
                {pendingRewardsLoaded
                  ? formatDecimals(pendingRewards?.pendingEle)
                  : (<Loader/>)
                }
              </div>
              <div className={classes.balanceDescription}>{t('Vault-Earned')} {pool.farm.earnedToken}</div>
            </div>
          </div>

          <FarmClaimButton pool={pool} />
        </div>
      </Grid>
    </>
  );
}

export default FarmOnly;