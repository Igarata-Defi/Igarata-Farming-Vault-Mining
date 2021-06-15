import React from 'react';
import { createUseStyles } from 'react-jss';

import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Tooltip = ({ children, position }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <QuestionMarkCircleIcon className={classes.icon} />
      <div className={classes.popup + ' ' + (position || 'bottom-right')}>
        { children }
      </div>
    </div>
  )
}

export default Tooltip;