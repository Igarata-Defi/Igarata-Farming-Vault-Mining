import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import BigNumber from 'bignumber.js';
import { useSnackbar } from 'notistack';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchWithdraw } from 'features/vault/redux/hooks';

import AmountDialog from 'components/AmountDialog/AmountDialog';

import styles from './styles';
const useStyles = createUseStyles(styles);

const WithdrawButton = ({ pool, index, balance }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { fetchWithdraw, fetchWithdrawNativeToken, fetchWithdrawPending } = useFetchWithdraw();

  const [amountDialogOpen, setAmountDialogOpen] = useState(false);

  const handleWithdraw = (amount) => {
    if (! amount || amount == '0') {
      enqueueSnackbar(`Enter the amount to withdraw`, { variant: 'error' })
      return;
    }

    let amountValue = amount.replace(',', '')

    if (pool.tokenAddress) {
      fetchWithdraw({
        address,
        web3,
        isAll: false,
        amount: new BigNumber(amountValue)
          .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
          .dividedBy(pool.pricePerFullShare)
          .toFixed(0),
        contractAddress: pool.earnContractAddress,
        index
      })
        .then(() => {
          setAmountDialogOpen(false);
          enqueueSnackbar(`Withdraw success`, { variant: 'success' })
        })
        .catch(error => enqueueSnackbar(`Withdraw error: ${error}`, { variant: 'error' }))
    } else {
      fetchWithdrawNativeToken({
        address,
        web3,
        amount: new BigNumber(amountValue)
          .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
          .dividedBy(pool.pricePerFullShare)
          .toFixed(0),
        contractAddress: pool.earnContractAddress,
        index
      })
        .then(() => {
          setAmountDialogOpen(false);
          enqueueSnackbar(`Withdraw success`, { variant: 'success' })
        })
        .catch(error => enqueueSnackbar(`Withdraw error: ${error}`, { variant: 'error' }))
    }
  }

  const handleWithdrawButton = () => {
    setAmountDialogOpen(true);
  }

  const handleAmountDialogClose = () => {
    setAmountDialogOpen(false);
  }

  return (
    <span>
      <button className={classes.buttonSecondary}
        onClick={handleWithdrawButton}
      >
        {t('Vault-WithdrawButton')}
      </button>

      <AmountDialog
        tokensAmounts={[{
          token: pool.token,
          decimals: pool.tokenDecimals,
          balance: balance
        }]}
        onConfirm={handleWithdraw}

        title={'Withdraw from Vault'}
        buttonText={'Withdraw'}
        buttonIsLoading={fetchWithdrawPending[index]}

        open={amountDialogOpen}
        onClose={handleAmountDialogClose} />
    </span>
  )
};

export default WithdrawButton;