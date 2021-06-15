import React, { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Transition } from '@headlessui/react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { useConnectWallet, useFetchTokenPrice } from '../redux/hooks';

import Loader from 'components/Loader/Loader';
import {
  LightningBoltIcon,
  DocumentTextIcon,
  ExternalLinkIcon,
  FingerPrintIcon,
  MenuIcon,
  ShieldCheckIcon
} from '@heroicons/react/outline'

import NetworkSelect from './NetworkSelect/NetworkSelect';

import logo from 'assets/img/logo.png';
import twitterLogo from 'assets/img/socials/twitter.png';
import telegramLogo from 'assets/img/socials/telegram.png';
import mediumLogo from 'assets/img/socials/medium.png';
import githubLogo from 'assets/img/socials/github.png';
import { ReactComponent as BigfootIcon } from 'assets/img/bigfoot.svg';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Sidebar = ({ connected, address, connectWallet, disconnectWallet }) => {
  const classes = useStyles();
  const { web3, network, networkId, networkData } = useConnectWallet();
  const { tokenPriceUsd, fetchTokenPrice, fetchTokenPriceDone } = useFetchTokenPrice();

  const [isOpen, setIsOpen] = useState(false);
  const [shortAddress, setShortAddress] = useState('');

  isOpen ? disableBodyScroll(document) : enableBodyScroll(document)

  useEffect(() => {
    const fetch = () => {
      if (web3 && network) {
        fetchTokenPrice({ web3, network });
      }
    }

    fetch();

    const id = setInterval(fetch, 60000);
    return () => clearInterval(id);
  }, [web3, network])

  useEffect(() => {
    if (! connected) {
      return;
    }

    if (address.length < 11) {
      setShortAddress(address)
    } else {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`)
    }
  }, [address])

  const onMobileButtonClick = () => {
    setIsOpen(true);
  }

  const onOverlayClick = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className={classes.mobileButton}>
        <button onClick={onMobileButtonClick}>
          <MenuIcon />
        </button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter={classes.transitionOpacity}
        enterFrom={classes.transitionOpacityClosed}
        enterTo={classes.transitionOpacityOpen}
        leave={classes.transitionOpacity}
        leaveFrom={classes.transitionOpacityOpen}
        leaveTo={classes.transitionOpacityClosed}
      >
        <div
          className={classes.overlay}
          onClick={onOverlayClick}
        ></div>
      </Transition>

      <div className={classes.sidebar + (isOpen ? ' open' : '')}>
        <div className={classes.sidebarInner}>
          {/* Logo */}
          <a href="#" className={classes.logo}>
            <img src={logo} />
            POLYDEFI
          </a>

          <div>
            <NetworkSelect
              web3={web3}
              networkId={networkId}
              networkData={networkData}
              connectWallet={connectWallet}
            />

            {/* Wallet */}
            <button className={classes.wallet}
              onClick={connected ? disconnectWallet : connectWallet}
            >
              <FingerPrintIcon />
              { connected && shortAddress ? shortAddress : 'WALLET' }
            </button>
          </div>

          <div className={classes.divider}></div>

          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <a href="/#/vault">
                <LightningBoltIcon />
                Vault
              </a>
            </li>

            <li className={classes.menuItem}>
              <a href="/#/mining">
                <ShieldCheckIcon />
                Mining
              </a>
            </li>

            <li className={classes.menuItem}>
              <a href="https://11eleven-11finance.gitbook.io/eleven-finance/" target="_blank">
                <DocumentTextIcon />
                LaunchPad
              </a>
            </li>
          </ul>

          {/* <a className={classes.bigfootButton}
            href="http://bigfoot.eleven.finance"
            target="_blank"
          >
            <BigfootIcon />
            Bigfoot
          </a> */}
        </div>


        <div className={classes.bottom}>
          {/* Price & Buy */}
          <div className={classes.priceBlock}>
            <div className={classes.price}>
              <img src={logo} />
              { fetchTokenPriceDone
                ? '$' + (tokenPriceUsd ? tokenPriceUsd.toFixed(2) : '--')
                : <Loader />
              }
            </div>
            <div>
              <a
                className={classes.buyButton}
                href={networkData?.buyTokenLink || 'https://app.1inch.io/#/56/swap/BNB/ELE'}
                target="_blank"
              >
                <ExternalLinkIcon />
                Buy IGA
              </a>
            </div>
          </div>

          <div className={classes.divider + ' small'}></div>

          {/* Social Links */}
          <div className={classes.socials}>
            <a href="https://twitter.com/elevenfinance" target="_blank">
              <img src={twitterLogo} />
            </a>
            <a href="https://t.me/elevenfinance" target="_blank">
              <img src={telegramLogo} />
            </a>
            <a href="https://elevenfinance.medium.com/" target="_blank">
              <img src={mediumLogo} />
            </a>
            <a href="https://github.com/Eleven-Finance" target="_blank">
              <img src={githubLogo} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
