import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useSnackbar } from 'notistack';
import BigNumber from 'bignumber.js';
import { byDecimals } from 'features/helpers/bignumber';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchDeposit, useFetchApproval } from 'features/mining/redux/hooks';

import AmountDialog from 'components/AmountDialog/AmountDialog'
import Dialog from 'components/Dialog/Dialog';
import Spinner from 'components/Spinner/Spinner';

import { InformationCircleIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const MultiTokenDepositButton = ({ pool, tokens, index }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { fetchApproval, fetchApprovalPending } = useFetchApproval();
  const { fetchDepositMultiToken, fetchDepositPending } = useFetchDeposit();

  const [tokensAmounts, setTokensAmounts] = useState([]);
  const [requiredApprovals, setRequiredApprovals] = useState([]);
  const [amountDialogOpen, setAmountDialogOpen] = useState(false);
  const [approvalDialogOpen, setApprovalDialogOpen] = useState(false);

  useEffect(() => {
    const amounts = [];

    pool.tokens.forEach(token => {
      const balance = byDecimals(tokens[token.token].tokenBalance, token.decimals);

      amounts.push({
        token: token.token,
        decimals: token.decimals,
        image: token.image,
        // If pool uses network's native token (ETH, BNB, etc) - leave some reserve for TX fees
        balance: balance.minus(token.address === null ? 0.02 : 0)
      })
    });

    setTokensAmounts(amounts)
  }, [pool, tokens]);

  const onApproval = (tokenAddress) => {
    fetchApproval({
      address,
      web3,
      pool,
      tokenAddress: tokenAddress,
    })
      .then(() => {
        const newApprovals = [...requiredApprovals];
        newApprovals.shift();

        if (newApprovals.length) {
          setRequiredApprovals(newApprovals);
        } else {
          setApprovalDialogOpen(false);
          setAmountDialogOpen(true);
    }

        enqueueSnackbar(`Approval success`, { variant: 'success' });
      })
      .catch(error => enqueueSnackbar(`Approval error: ${error}`, { variant: 'error' }))
  }

  const handleDeposit = (amounts) => {
    if (! amounts.filter(amount => +amount > 0).length) {
      enqueueSnackbar(`Enter the amount to deposit`, { variant: 'error' })
      return;
    }

    // Check if any of tokens requires approval
    const approvals = pool.tokens.filter((token, index) => amounts[index] > 0 && ! pool.allowance[token.address]);
    if (approvals.length) {
      setRequiredApprovals(approvals);
      setAmountDialogOpen(false);
      setApprovalDialogOpen(true);
      return;
    }

    const amountsValues = pool.tokens.map((token, index) => {
      return new BigNumber(amounts[index])
        .multipliedBy(new BigNumber(10).exponentiatedBy(token.decimals))
        .toString(10)
    });

    fetchDepositMultiToken({
      address,
      web3,
      amounts: amountsValues,
      contractAddress: pool.earnContractAddress,
      index
    })
      .then(() => {
        setAmountDialogOpen(false);
        enqueueSnackbar(`Deposit success`, { variant: 'success' })
      })
      .catch(error => enqueueSnackbar(`Deposit error: ${error}`, { variant: 'error' }))
  }

  const handleDepositButton = () => {
    setAmountDialogOpen(true);
  }

  const handleAmountDialogClose = () => {
    setAmountDialogOpen(false);
  }

  return (
    <span>
      <button
        className={classes.buttonPrimary}
        onClick={handleDepositButton}
      >
        {t('Vault-DepositButton')}
      </button>

      <AmountDialog
        multiToken={true}
        tokensAmounts={tokensAmounts}
        onConfirm={handleDeposit}

        title={'Deposit to Bank'}
        buttonText={'Deposit'}
        buttonIsLoading={fetchDepositPending[index]}

        open={amountDialogOpen}
        onClose={handleAmountDialogClose}
      >
        <div className={classes.alert + ' with-icon'}>
          <InformationCircleIcon className="icon" />
          You can deposit one or multiple stablecoins simultaneously in any proportion you like
        </div>
      </AmountDialog>

      {/* Tokens Approval Dialog */}
      <Dialog open={approvalDialogOpen}
        onClose={() => setApprovalDialogOpen(false)}
        title={"Approve Tokens"}
      >
        {requiredApprovals.length && (
          <div className={classes.tokenApproveBlock}>
            <div className="image">
              <img src={require('images/' + (requiredApprovals[0].image || (requiredApprovals[0].token + '-logo.svg')))}/>
            </div>
            <div>
              <div className="name">{ requiredApprovals[0].token }</div>
              <button
                className={classes.buttonPrimary}
                onClick={() => onApproval(requiredApprovals[0].address)}
              >
                {! fetchApprovalPending[pool.id]
                  ? `${t('Vault-ApproveButton')}`
                  : (<Spinner />)}
              </button>
            </div>
          </div>
        )}
      </Dialog>

    </span>
  );
};

export default MultiTokenDepositButton;