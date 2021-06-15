import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Grid from '@material-ui/core/Grid';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchPoolRewards } from 'features/mining/redux/fetchPoolRewards';

import BigfootUsd from './Layouts/BigfootUsd';
import Boosted from './Layouts/Boosted';
import Claimable from './Layouts/Claimable';
import FarmOnly from './Layouts/FarmOnly';
import Regular from './Layouts/Regular';

import styles from './styles';
const useStyles = createUseStyles(styles);

const PoolDetails = ({ pool, index, tokens, tokenBalance, depositedBalance, stakedBalance, isBoosted }) => {
  const classes = useStyles();

  const { web3, address } = useConnectWallet();
  const { pendingRewards, fetchPoolRewards, fetchPoolRewardsDone } = useFetchPoolRewards();

  useEffect(() => {
    const fetch = () => {
      if (address && web3) {
        fetchPoolRewards({ address, web3, pool })
      }
    };

    fetch();

    const id = setInterval(fetch, 15000);
    return () => clearInterval(id);
  }, [address, web3, fetchPoolRewards]);

  const getDetailsSection = () => {
    // if (pool.id == 'bfusd') {
    //   return <BigfootUsd pool={pool}
    //     index={index}
    //     tokens={tokens}
    //     tokenBalance={tokenBalance}
    //     depositedBalance={depositedBalance}
    //     stakedBalance={stakedBalance}
    //     pendingRewards={pendingRewards[pool.id]}
    //     pendingRewardsLoaded={fetchPoolRewardsDone[pool.id]}
    //   />
    // }

    // if (pool.claimable) {
    //   return <Claimable pool={pool}
    //     index={index}
    //     tokenBalance={tokenBalance}
    //     depositedBalance={depositedBalance}
    //     pendingRewards={pendingRewards[pool.id]}
    //     pendingRewardsLoaded={fetchPoolRewardsDone[pool.id]}
    //   />
    // }

    if (! pool.earnContractAddress && pool.farm && (! pool.farm.isDisabled || stakedBalance.gt(0))) {
      return <FarmOnly pool={pool}
        index={index}
        tokenBalance={tokenBalance}
        stakedBalance={stakedBalance}
        pendingRewards={pendingRewards[pool.id]}
        pendingRewardsLoaded={fetchPoolRewardsDone[pool.id]}
      />
    }

    return <>
      <Regular pool={pool}
        index={index}
        tokenBalance={tokenBalance}
        depositedBalance={depositedBalance}
      />

      {(isBoosted || stakedBalance.gt(0)) && (
        <Boosted pool={pool}
          index={index}
          depositedBalance={depositedBalance}
          stakedBalance={stakedBalance}
          pendingRewards={pendingRewards[pool.id]}
          pendingRewardsLoaded={fetchPoolRewardsDone[pool.id]}
        />
      )}
    </>
  }

  return (
    <Grid item container xs={12} className={classes.poolDetails}>
      { getDetailsSection() }
    </Grid>
  );
}

export default PoolDetails;