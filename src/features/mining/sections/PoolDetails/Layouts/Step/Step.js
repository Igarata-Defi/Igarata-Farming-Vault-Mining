import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Step = ({ number, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.step + (!number ? ' ' + classes.stepEmpty : '')}>
      <span className={classes.stepLine}></span>
      {number && (
        <span>
          <span className={classes.stepBg}></span>
          <span className={classes.stepNumber}>{number}</span>
          <span className={classes.stepLabel}>{label}</span>
        </span>
      )}
    </div>
  )
}

export default Step;