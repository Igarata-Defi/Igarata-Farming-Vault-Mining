import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Transition } from '@headlessui/react';
import BigNumber from 'bignumber.js';
import { byDecimals } from 'features/helpers/bignumber';

import { useConnectWallet } from 'features/home/redux/hooks';
import { convert3PoolToUsd, switchNetwork } from 'features/web3'

import { networks } from 'features/configure';

import PoolSummary from '../PoolSummary/PoolSummary';
import PoolDetails from '../PoolDetails/PoolDetails';

import { FireIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Pool = ({ pool, index, tokens, fetchBalancesDone, fetchPoolDataDone }) => {
  const classes = useStyles();

  const { web3, address, network, connectWallet } = useConnectWallet();

  const [isOpen, setIsOpen] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(new BigNumber(0));
  const [depositedBalance, setDepositedBalance] = useState(new BigNumber(0));
  const [stakedBalance, setStakedBalance] = useState(new BigNumber(0));
  const [depositedAndStaked, setDepositedAndStaked] = useState(null);

  const toggleCard = () => {
    if (pool.network == network) {
      setIsOpen(! isOpen);
    } else {
      const poolNetwork = networks.find(item => item.name == pool.network);

      switchNetwork({
        web3,
        params: poolNetwork.params,
        connectWallet
      })
    }
  }

  useEffect(() => {
    if (isOpen && pool.network != network) {
      setIsOpen(false);
    }
  }, [network]);

  useEffect(() => {
    const boosted = pool.farm && ! pool.farm.isDisabled && pool.earnContractAddress;
    setIsBoosted(boosted);
  }, [pool, stakedBalance]);

  useEffect(() => {
    if (pool.isMultiToken) {
      let balance = new BigNumber(0);

      pool.tokens.map(token => {
        if (tokens[token.token]) {
          balance = balance.plus(byDecimals(tokens[token.token].tokenBalance, token.decimals));
        }
      });

      setTokenBalance(balance);
    } else {
      if (tokens[pool.token]) {
        setTokenBalance(byDecimals(tokens[pool.token].tokenBalance, pool.tokenDecimals));
      }
    }
 


    
    if (fetchPoolDataDone) {
      const depositedBalance = pool.earnContractAddress
        ? byDecimals(tokens[pool.earnedToken].tokenBalance, pool.itokenDecimals).times(pool.pricePerFullShare)
        : new BigNumber(0);

      let stakedBalancePromise;
    
   

      

      if (pool.id == 'bfusd' && depositedBalance.gt(0)) {
        // For Bigfoot USD pool add "virtual" stakedBalance to display values in USD without the need to modify
        // pricePerFullShare
        const amount = depositedBalance.multipliedBy(new BigNumber(10).exponentiatedBy(18)).toFixed(0);
        stakedBalancePromise = convert3PoolToUsd({ web3, address, amount, usdTokenIndex: 0 })
          .then(balanceUsd => byDecimals(balanceUsd, pool.tokens[0].decimals).minus(depositedBalance))
      } else {
        stakedBalancePromise = Promise.resolve((pool.stakedAmount || new BigNumber(0)).times(pool.pricePerFullShare));
      }

      stakedBalancePromise.then(stakedBalance => {
        setDepositedBalance(depositedBalance);
        setStakedBalance(stakedBalance);
        setDepositedAndStaked(depositedBalance.plus(stakedBalance));
      });
    } else {
      setDepositedAndStaked(null);
    }

  }, [tokens, pool, fetchPoolDataDone])

  return (
    <div key={pool.id}
      className={classes.pool + (isBoosted ? ' highlighted' : '')}
    >
      {isBoosted && (
        <div className={classes.highlightLabel}>
          <FireIcon />
          Boosted
        </div>
      )}

      <PoolSummary pool={pool}
        tokenBalance={tokenBalance}
        depositedBalance={depositedAndStaked}
        fetchBalanceDone={fetchBalancesDone}
        isActiveNetwork={pool.network == network}
        onClick={() => toggleCard()}
        isBoosted={isBoosted}
      />

      <Transition
        show={isOpen}
        enter={classes.transitionSlide}
        enterFrom={classes.transitionSlideClosed}
        enterTo={classes.transitionSlideOpen}
        leave={classes.transitionSlide}
        leaveFrom={classes.transitionSlideOpen}
        leaveTo={classes.transitionSlideClosed}
      >
        <PoolDetails pool={pool}
          index={index}
          tokens={tokens}
          tokenBalance={tokenBalance}
          depositedBalance={depositedBalance}
          stakedBalance={stakedBalance}
          isBoosted={isBoosted}
        />
      </Transition>
    </div>
  );
};

export default Pool;