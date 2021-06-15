import i18next from 'i18next';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

let modal;

export const fetchWeb3Modal = () => modal || _createModal();

const _createModal = () => {
  modal = new Web3Modal({
    network: process.env.NETWORK ? process.env.NETWORK : "mainnet",
    cacheProvider: true,
    providerOptions: {
      injected: {
        display: {
          name: "Injected",
          description: i18next.t('Home-BrowserWallet')
        },
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.INFURA_ID
        }
      },
      'custom-binance': {
        display: {
          name: 'Binance',
          description: 'Binance Chain Wallet',
          logo: require(`assets/img/wallets/binance-wallet.png`),
        },
        package: 'binance',
        connector: async (ProviderPackage, options) => {
          const provider = window.BinanceChain;
          await provider.enable();
          return provider;
        },
      },
    }
  });

  return modal;
}