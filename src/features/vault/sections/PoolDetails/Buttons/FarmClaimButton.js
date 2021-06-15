import React from 'react';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import { useSnackbar } from 'notistack';

import { useConnectWallet } from 'features/home/redux/hooks';
import { useFetchFarmClaim } from 'features/vault/redux/hooks';

import Spinner from 'components/Spinner/Spinner';

import styles from './styles';
const useStyles = createUseStyles(styles);

const FarmClaimButton = ({ pool }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { web3, address } = useConnectWallet();
  const { fetchFarmClaim, fetchFarmClaimPending } = useFetchFarmClaim();

  const handleHarvest = () => {
    fetchFarmClaim({ address, web3, pool})
      .then(() => enqueueSnackbar(`Harvest success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Harvest error: ${error}`, { variant: 'error' }))
  }

  return (
    <button className={classes.buttonPrimary}
      onClick={handleHarvest}
    >
      {!fetchFarmClaimPending[pool.id]
        ? t('Vault-HarvestButton')
        : (<Spinner/>)}
    </button>
  );
};

export default FarmClaimButton;