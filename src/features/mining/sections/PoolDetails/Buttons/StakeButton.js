import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import BigNumber from 'bignumber.js';
import { useSnackbar } from 'notistack';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchFarmAllowance, useFetchFarmApproval, useFetchFarmStake } from 'features/mining/redux/hooks';

import AmountDialog from 'components/AmountDialog/AmountDialog'
import Spinner from 'components/Spinner/Spinner';

import styles from './styles';
const useStyles = createUseStyles(styles);

const StakeButton = ({ pool, index, balance }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { farmAllowance, fetchFarmAllowance } = useFetchFarmAllowance();
  const { fetchFarmApproval, fetchFarmApprovalPending } = useFetchFarmApproval();
  const { fetchFarmStake, fetchFarmStakePending } = useFetchFarmStake();

  const [amountDialogOpen, setAmountDialogOpen] = useState(false);

  useEffect(() => {
    const fetch = () => {
      if (address && web3) {
        fetchFarmAllowance({ address, web3, pool })
      }
    };

    fetch();

    const id = setInterval(fetch, 15000);
    return () => clearInterval(id);
  }, [address, web3]);

  const handleApproval = () => {
    fetchFarmApproval({
      address,
      web3,
      pool,
      index
    })
      .then(() => enqueueSnackbar(`Approval success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Approval error: ${error}`, { variant: 'error' }))
  }

  const handleStake = (stakeAmount) => {
    if (! stakeAmount || stakeAmount == '0') {
      enqueueSnackbar(`Enter the amount to stake`, { variant: 'error' })
      return;
    }

    const amount = new BigNumber(stakeAmount.replace(',', ''))
        .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
        .dividedBy(pool.pricePerFullShare)
        .toFixed(0);

    fetchFarmStake({ address, web3, pool, amount })
      .then(() => {
        setAmountDialogOpen(false);
        enqueueSnackbar(`Stake success`, { variant: 'success' })
      })
      .catch(error => enqueueSnackbar(`Stake error: ${error}`, { variant: 'error' }))
  }

  const handleStakeButton = () => {
    setAmountDialogOpen(true);
  }

  const handleAmountDialogClose = () => {
    setAmountDialogOpen(false);
  }

  return (
    <span>
      {farmAllowance[pool.id] ? (
        <button className={classes.buttonPrimary}
          onClick={handleStakeButton}
        >
          {t('Vault-Stake')}
        </button>
      ) : (
        <button className={classes.buttonPrimary}
          onClick={handleApproval}
          disabled={fetchFarmApprovalPending[pool.id]}
        >
          {!fetchFarmApprovalPending[pool.id]
            ? `${t('Vault-ApproveButton')}`
            : (<Spinner />)}
        </button>
      )}

      <AmountDialog
        tokensAmounts={[{
          token: pool.token,
          decimals: pool.tokenDecimals,
          balance: balance
        }]}
        onConfirm={handleStake}

        title={'Stake tokens'}
        buttonText={'Stake'}
        buttonIsLoading={fetchFarmStakePending[pool.id]}

        open={amountDialogOpen}
        onClose={handleAmountDialogClose} />
    </span>
  );
};

export default StakeButton;