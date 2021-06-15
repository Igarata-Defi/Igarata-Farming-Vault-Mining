import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import BigNumber from 'bignumber.js';
import { useSnackbar } from 'notistack';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchFarmUnstake } from 'features/vault/redux/hooks';

import AmountDialog from 'components/AmountDialog/AmountDialog';

import styles from './styles';
const useStyles = createUseStyles(styles);

const UnstakeButton = ({ pool, index, balance }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { fetchFarmUnstake, fetchFarmUnstakePending } = useFetchFarmUnstake();

  const [amountDialogOpen, setAmountDialogOpen] = useState(false);

  const handleUnstake = (amount) => {
    if (! amount || amount == '0') {
      enqueueSnackbar(`Enter the amount to unstake`, { variant: 'error' })
      return;
    }

    let amountValue = amount.replace(',', '')

    fetchFarmUnstake({
      address,
      web3,
      pool,
      amount: new BigNumber(amountValue)
        .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
        .dividedBy(pool.pricePerFullShare)
        .toFixed(0)
    })
      .then(() => {
        setAmountDialogOpen(false);
        enqueueSnackbar(`Unstake success`, { variant: 'success' })
      })
      .catch(error => enqueueSnackbar(`Unstake error: ${error}`, { variant: 'error' }))
  }

  const handleUnstakeButton = () => {
    setAmountDialogOpen(true);
  }

  const handleAmountDialogClose = () => {
    setAmountDialogOpen(false);
  }

  return (
    <span>
      <button className={classes.buttonSecondary}
        onClick={handleUnstakeButton}
      >
        {t('Vault-Unstake')}
      </button>

      <AmountDialog
        tokensAmounts={[{
          token: pool.token,
          decimals: pool.tokenDecimals,
          balance: balance
        }]}
        onConfirm={handleUnstake}

        title={'Unstake from Farm'}
        buttonText={'Unstake'}
        buttonIsLoading={fetchFarmUnstakePending[pool.id]}

        open={amountDialogOpen}
        onClose={handleAmountDialogClose} />
    </span>
  )
};

export default UnstakeButton;