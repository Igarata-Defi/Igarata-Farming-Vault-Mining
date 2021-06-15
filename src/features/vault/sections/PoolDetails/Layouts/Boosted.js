import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { formatDecimals } from 'features/helpers/bignumber';

import Grid from '@material-ui/core/Grid';
import Loader from 'components/Loader/Loader';

import FarmClaimButton from '../Buttons/FarmClaimButton';
import StakeButton from '../Buttons/StakeButton';
import UnstakeButton from '../Buttons/UnstakeButton';

import { FireIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Boosted = ({ pool, index, depositedBalance, stakedBalance, pendingRewards, pendingRewardsLoaded }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <div className={classes.boostHeader + (! pool.farm.isDisabled ? ' active' : '')}>
          <span>
            <FireIcon className={classes.boostIcon} />
            {! pool.farm.isDisabled ? 'Boost your Rewards' : 'Pool Boost ended'}
          </span>
        </div>
      </Grid>
      <Grid item xs={12} lg={3}>
        <div className={classes.detailsSection + ' without-steps'}>
          <div className={classes.balance}>{formatDecimals(stakedBalance, pool.tokenDecimals)}</div>
          {pool.price && (
            <div className={classes.balanceSecondary}>${stakedBalance.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Staked')}</div>

          {! pool.farm.isDisabled && (
            <>
              <StakeButton pool={pool} index={index} balance={depositedBalance} /> &nbsp;&nbsp;
            </>
          )}

          <UnstakeButton pool={pool} index={index} balance={stakedBalance} />
        </div>
      </Grid>

      {/* Farm Earnings */}
      <Grid item xs={12} lg={3}>
        <div className={classes.detailsSection + ' ' + classes.boostRewards + ' without-steps'}>
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

      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.descriptionSection}>
          {! pool.farm.isDisabled && (
            <>
              <p><b>The pool is Boosted!</b></p>
              <p>
                You can earn additional <b>ELE</b> Rewards by Staking your tokens after you Deposit them.
              </p>
              <p>
                Staked tokens will still be compounded and earn base pool rewards.
              </p>
            </>
          )}

          {pool.farm.isDisabled && (
            <>
              <p>
                This pool is no longer being Boosted. <b>ELE</b> Rewards will no longer be awarded.
                Feel free to Unstake your tokens. Your asset will keep compounding even if you don't.
              </p>
              <p>
                <b>Important: </b> do not Withdraw your tokens after Unstaking to keep receiving base pool rewards.
              </p>
            </>
          )}
        </div>
      </Grid>
    </>
  );
}

export default Boosted;