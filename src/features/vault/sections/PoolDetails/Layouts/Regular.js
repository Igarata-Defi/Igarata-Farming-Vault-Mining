import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { formatDecimals } from 'features/helpers/bignumber';

import Grid from '@material-ui/core/Grid';
import Tooltip from 'components/Tooltip/Tooltip';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import DepositButton from '../Buttons/DepositButton';
import WithdrawButton from '../Buttons/WithdrawButton';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Regular = ({ pool, index, tokenBalance, depositedBalance }) => {

  console.log(depositedBalance);
  console.log("depositedBalance in Regular");

  const { t } = useTranslation();
  const classes = useStyles();

  const [performanceFee, setPerformanceFee] = useState(0);

  useEffect(() => {
    let fee = 0;

    if (pool.fees) {
      fee = (pool.fees.controller || 0)
        + (pool.fees.platform || 0)
        + (pool.fees.dividends || 0)
        + (pool.fees.buybacks || 0);
    }

    setPerformanceFee(fee);
  }, [pool]);

  return (
    <>
      <Grid item xs={12}>
        <div className={classes.divider}></div>
      </Grid>

      {/* Deposit Section */}
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.detailsSection + ' without-steps'}>
          { <div className={classes.balance}>{formatDecimals(tokenBalance)}</div> /*//TOKEN PRICE */}
          {pool.price && (
            <div className={classes.balanceSecondary}>${tokenBalance.times(pool.price).toFixed(2)}</div> 
          )}
          <div className={classes.balanceDescription}>{t('Vault-Balance')}</div>
          {!pool.isDiscontinued && (
            <DepositButton pool={pool} index={index} balance={tokenBalance} />
          )}
        </div>
      </Grid>

   
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.detailsSection + ' without-steps'}>
          <div className={classes.balance}>{formatDecimals(depositedBalance, pool.tokenDecimals)}</div> 
          {pool.price && (
            <div className={classes.balanceSecondary}>${depositedBalance.times(pool.price).toFixed(2)}</div>
          )}
          <div className={classes.balanceDescription}>{t('Vault-Deposited')}</div>

          <WithdrawButton pool={pool} index={index} balance={depositedBalance} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.descriptionSection + ' ' + classes.statsSection}>
          {(pool.fees || pool.links) && (
            <div className={classes.statsContent}>
              {pool.fees && (
                <>
                  {pool.fees.third_party && (
                    <div className="item warning">
                      <span>3rd party fee</span>
                      <span>{ pool.fees.third_party }</span>
                    </div>
                  )}
                  <div className="item">
                    <span>Deposit fee</span>
                    <span>{ pool.fees.deposit ? pool.fees.deposit + '% on capital' : 'none' }</span>
                  </div>
                  <div className="item">
                    <span>Withdrawal fee</span>
                    <span>{ pool.fees.withdrawal ? pool.fees.withdrawal + '% on capital' : 'none' }</span>
                  </div>
                  <div className="item">
                    <span>Performance fee</span>
                    <span>
                      { performanceFee
                        ? (
                          <>
                            {performanceFee + '% on profits'}
                            <Tooltip position="bottom-left">
                              {pool.fees.buybacks > 0 && (
                                <div>{pool.fees.buybacks + '%'} - ELE Buybacks</div>
                              )}
                              {pool.fees.dividends > 0 && (
                                <div>{pool.fees.dividends + '%'} - ELE pool dividends</div>
                              )}
                              {pool.fees.controller > 0 && (
                                <div>{pool.fees.controller + '%'} - Controller</div>
                              )}
                              {pool.fees.platform > 0 && (
                                <div>{pool.fees.platform + '%'} - Platform</div>
                              )}
                            </Tooltip>
                            <br/>
                            <i className="small">(75% of fees buyback ELE)</i>
                          </>
                        )
                        : 'none'
                      }
                    </span>
                  </div>

                  {pool.fees.waultx_burn && (
                    <div className="item">
                      <span>WAULTx burn</span>
                      <span>{ pool.fees.waultx_burn + '% on profits' }</span>
                    </div>
                  )}
                </>
              )}

              {pool.links && (
                <div className={classes.statsLinks}>
                  {pool.links.map((link, index) => {
                    return (
                      <a
                        href={link.url}
                        key={index}
                        target="_blank"
                      >
                        <ExternalLinkIcon />
                        {
                          link.text || (
                            link.type == 'buy_token'
                              ? 'Buy Token'
                              : 'Add Liquidity'
                          )
                        }
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Regular;