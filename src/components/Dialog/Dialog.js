import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Dialog = ({ open, onClose, title, children, controls }) => {
  const classes = useStyles();

  return (
    <Transition appear show={open} as={Fragment}>
      <HeadlessDialog
        as="div"
        className={classes.dialog}
        open={open}
        onClose={onClose}
      >
        <div className={classes.wrapper}>
          <Transition.Child
            as={Fragment}
            enter={classes.transitionOpacity}
            enterFrom={classes.transitionOpacityClosed}
            enterTo={classes.transitionOpacityOpen}
            leave={classes.transitionOpacity}
            leaveFrom={classes.transitionOpacityOpen}
            leaveTo={classes.transitionOpacityClosed}
          >
            <HeadlessDialog.Overlay className={classes.overlay} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className={classes.trick}
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter={classes.transitionFade}
            enterFrom={classes.transitionFadeClosed}
            enterTo={classes.transitionFadeOpen}
            leave={classes.transitionFade}
            leaveFrom={classes.transitionFadeOpen}
            leaveTo={classes.transitionFadeClosed}
          >
            <div className={classes.content}>
              <button className={classes.close} onClick={onClose}></button>

              <HeadlessDialog.Title
                as="h3"
                className={classes.title}
              >
                { title }
              </HeadlessDialog.Title>

              <div>
                { children }
              </div>

              <div className={classes.controls}>
                { controls }
              </div>
            </div>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}

export default Dialog;