import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { formatDecimals } from 'features/helpers/bignumber';

import Grid from '@material-ui/core/Grid';
import Loader from 'components/Loader/Loader';

import ClaimButton from '../Buttons/ClaimButton';
import MultiTokenDepositButton from '../Buttons/MultiTokenDepositButton';
import MultiTokenWithdrawButton from '../Buttons/MultiTokenWithdrawButton';
import Step from './Step/Step';

import styles from './styles';
const useStyles = createUseStyles(styles);

const BigfootUsd = ({
  pool,
  index,
  tokens,
  tokenBalance,
  depositedBalance,
  stakedBalance,
  pendingRewards,
  pendingRewardsLoaded
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {/* Tokens Balances */}
      <Grid item xs={12} sm={6} md={3}>
        <Step number={1} label={'Deposit to Bank'} />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>${formatDecimals(tokenBalance, 2)}</div>
          <div className={classes.balanceDescription}>Stablecoins Balance</div>

          {!pool.isDiscontinued && (
            <MultiTokenDepositButton pool={pool} tokens={tokens} index={index} />
          )}
        </div>
      </Grid>

      {/* Deposited Tokens */}
      <Grid item xs={12} sm={6} md={3}>
        <Step />

        <div className={classes.detailsSection}>
          <div className={classes.balance}>${formatDecimals(depositedBalance.plus(stakedBalance), 2)}</div>
          <div className={classes.balanceDescription}>{t('Vault-Deposited')}</div>

          <MultiTokenWithdrawButton pool={pool} tokens={tokens} balance={depositedBalance} index={index} />
        </div>
      </Grid>

      {/* Farm Earnings */}
      <Grid item xs={12} md={6}>
        <Step number={2} label={'Harvest the Rewards'} />

        <div className={classes.detailsSection}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className={classes.balanceWithLogo + (pool.price ? ' ' + classes.balanceWithPadding : '')}>
                <div className={classes.balanceLogo}>
                  <img src={require(`images/ELE-logo.png`)}/>
                </div>
                <div>
                  <div className={classes.balance}>
                    {pendingRewardsLoaded
                      ? formatDecimals(pendingRewards?.pendingEle)
                      : (<Loader/>)
                    }
                  </div>
                  <div className={classes.balanceDescription}>{t('Vault-Earned')} ELE</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.balanceWithLogo + (pool.price ? ' ' + classes.balanceWithPadding : '')}>
                <div className={classes.balanceLogo}>
                  <img src={require(`images/${pool.claimableToken}-logo.svg`)}/>
                </div>
                <div>
                  <div className={classes.balance}>
                    {pendingRewardsLoaded
                      ? formatDecimals(pendingRewards?.pendingToken)
                      : (<Loader/>)
                    }
                  </div>
                  <div className={classes.balanceDescription}>{t('Vault-Earned')} {pool.claimableToken}</div>
                </div>
              </div>
            </Grid>
          </Grid>

          <ClaimButton pool={pool} />
        </div>
      </Grid>
    </>
  )
}

export default BigfootUsd;