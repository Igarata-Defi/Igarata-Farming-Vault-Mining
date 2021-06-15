import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useSnackbar } from 'notistack';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchClaim } from 'features/vault/redux/hooks';

import Spinner from 'components/Spinner/Spinner';

import styles from './styles';
const useStyles = createUseStyles(styles);

const ClaimButton = ({ pool }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { fetchClaim, fetchClaimPending } = useFetchClaim();

  const handleHarvest = () => {
    fetchClaim({ address, web3, pool })
      .then(() => enqueueSnackbar(`Harvest success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Harvest error: ${error}`, { variant: 'error' }))
  }

  return (
    <button className={classes.buttonPrimary}
      onClick={handleHarvest}
    >
      {!fetchClaimPending[pool.id]
        ? t('Vault-HarvestButton')
        : (<Spinner />)}
    </button>
  );
};

export default ClaimButton;