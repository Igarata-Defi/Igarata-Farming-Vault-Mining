import React from 'react';
import { createUseStyles } from 'react-jss';

import { ExclamationCircleIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Alert = ({ type, children }) => {
  const classes = useStyles();

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return <ExclamationCircleIcon />;

      default:
        return '';
    }
  }

  return (
    <div className={classes.wrapper + ' ' + type}>
      <div className={classes.icon}>
        { getIcon() }
      </div>

      <div className={classes.content}>
        { children }
      </div>
    </div>
  )
}

export default Alert;