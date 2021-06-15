import Web3 from "web3";
import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { HOME_CONNECT_WALLET_BEGIN, HOME_CONNECT_WALLET_SUCCESS, HOME_CONNECT_WALLET_FAILURE, HOME_ACCOUNTS_CHANGED, HOME_NETWORK_CHANGED } from './constants';
import { disconnectWallet } from './actions';

import { networks } from 'features/configure';
import { fetchWeb3Modal } from 'features/web3';

export function connectWallet() {
  return async dispatch => {
    dispatch({ type: HOME_CONNECT_WALLET_BEGIN });

    try {
      const web3Modal = fetchWeb3Modal();
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.extend({
        methods: [
          {
            name: "chainId",
            call: "eth_chainId",
            outputFormatter: web3.utils.hexToNumber
          }
        ]
      });

      const subscribeProvider = provider => {
        if (!provider.on) {
          console.log("provider.on")
          return;
        };

        provider.on("disconnect", async () => {
          console.log("provider.close")
          dispatch(disconnectWallet(web3, web3Modal));
        });

        provider.on("accountsChanged", async (accounts) => {
          console.log("provider.accountsChanged")
          console.log(accounts[0])
          if (accounts[0]) {
            dispatch({type: HOME_ACCOUNTS_CHANGED, data: accounts[0]});
          } else {
            dispatch(disconnectWallet(web3, web3Modal));
          }
        });

        provider.on("chainChanged", async (networkId) => {
          dispatch({type: HOME_NETWORK_CHANGED, data: networkId});
        });
      }

      await subscribeProvider(provider);

      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const networkId = await web3.eth.net.getId();

      dispatch({type: HOME_CONNECT_WALLET_SUCCESS, data: {web3, address, networkId}})

      // Debug message with last synchronized block
      web3.eth.getBlockNumber().then(res => console.info('Wallet connected. Last block: ' + res));

      return web3;
    } catch (error) {
      dispatch({ type: HOME_CONNECT_WALLET_FAILURE });
    }

  };
}

export function useConnectWallet() {
  const dispatch = useDispatch();
  const {web3, address, network, networkId, networkData, connected, connectWalletPending} = useSelector(state => ({
    web3: state.home.web3,
    address: state.home.address,

    network: state.home.network,
    networkId: state.home.networkId,
    networkData: state.home.networkData,

    connected: state.home.connected,
    connectWalletPending: state.home.connectWalletPending,
  }), shallowEqual);
  const boundAction = useCallback(data => dispatch(connectWallet(data)), [dispatch]);

  return {
    web3,
    address,
    network,
    networkId,
    networkData,
    connected,
    connectWalletPending,
    connectWallet: boundAction
  };
}

export function reducer(state, action) {
  let networkData;

  switch (action.type) {
    case HOME_CONNECT_WALLET_BEGIN:
      return {
        ...state,
        connectWalletPending: true
      };

    case HOME_CONNECT_WALLET_SUCCESS:
      networkData = networks.find(network => network.id == action.data.networkId);

      return {
        ...state,
        web3: action.data.web3,
        address: process.env.ACCOUNT ? process.env.ACCOUNT : action.data.address,

        network: networkData?.name || null,
        networkId: action.data.networkId,
        networkData: networkData || null,

        connected: true,
        connectWalletPending: false
      };

    case HOME_NETWORK_CHANGED:
      networkData = networks.find(network => network.id == action.data);

      return {
        ...state,
        network: networkData?.name || null,
        networkId: action.data,
        networkData: networkData || null
      }

    case HOME_ACCOUNTS_CHANGED:
      return {
        ...state,
        address: action.data
      }
    case HOME_CONNECT_WALLET_FAILURE:
      return {
        ...state,
        connectWalletPending: false
      };

    default:
      return state;
  }
}