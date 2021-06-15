import React, { useEffect } from 'react';
import { createUseStyles } from "react-jss";
import { SnackbarProvider } from 'notistack';

import { Notifier } from "features/common"

import { fetchWeb3Modal } from 'features/web3';
import { useConnectWallet, useDisconnectWallet } from './redux/hooks';

import Sidebar from './Sidebar/Sidebar';

import appStyle from "./jss/appStyle.js";
const useStyles = createUseStyles(appStyle);

export default function App({ children }) {
  const classes = useStyles();
  const { connectWallet, web3, address, connected } = useConnectWallet();
  const { disconnectWallet } = useDisconnectWallet();

  useEffect(() => {
    const web3Modal = fetchWeb3Modal();
    if (web3Modal && (web3Modal.cachedProvider || window.ethereum)) {
      connectWallet();
    }
  }, [fetchWeb3Modal, connectWallet, window.ethereum])

  return (
    <SnackbarProvider>
      <div className={classes.page}>
        <Sidebar
          address={address}
          connected={connected}
          connectWallet={() => connectWallet()}
          disconnectWallet={() => disconnectWallet(web3)}
        />

        <div className={classes.container}>
          <div className={classes.children}>
            { children }
            <Notifier />
          </div>
        </div>
      </div>
    </SnackbarProvider>
  );
}
