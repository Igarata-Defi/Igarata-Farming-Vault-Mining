import React, { Fragment, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Transition } from '@headlessui/react';
import { networks } from 'features/configure';

import { switchNetwork } from 'features/web3';

import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const NetworkSelect = ({ web3, networkId, networkData, connectWallet }) => {
  const classes = useStyles();

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const toggleSelect = () => {
    setIsSelectOpen(! isSelectOpen);
  }

  const onNetworkSelect = (network) => {
    if (network.id != networkId) {
      switchNetwork({
        web3,
        params: network.params,
        connectWallet: connectWallet
      });
    }

    setIsSelectOpen(false);
  }

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.network}
        onClick={() => toggleSelect()}
      >
        {networkId && networkData && (
          <>
            <img src={require(`assets/img/networks/${networkData.image}`)} />
            <span>{ networkData.label }</span>

            <div className={classes.networkStatus + ' connected'}></div>
          </>
        )}

        { ! networkData && (
          <>
            <QuestionMarkCircleIcon />
            <span>{ networkId ? 'Unsupported Network' : 'Connect wallet' }</span>

            <div className={classes.networkStatus}></div>
          </>
        )}
      </div>

      <Transition
        as={Fragment}
        show={isSelectOpen}
        enter={classes.transitionFade}
        enterFrom={classes.transitionFadeClosed}
        enterTo={classes.transitionFadeOpen}
        leave={classes.transitionFade}
        leaveFrom={classes.transitionFadeOpen}
        leaveTo={classes.transitionFadeClosed}
      >
        <div className={classes.networkSelect}>
          {networks.map(network => {
            return (
              <div
                key={network.name}
                className="item"
                onClick={() => onNetworkSelect(network)}
              >
                <img src={require(`assets/img/networks/${network.image}`)} />
                <span>{ network.label }</span>
              </div>
            )
          })}
        </div>
      </Transition>
    </div>
  );
};

export default NetworkSelect;