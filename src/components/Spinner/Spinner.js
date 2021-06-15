import React from 'react';
import { createUseStyles } from 'react-jss';

import styles from './styles';
const useStyles = createUseStyles(styles);

const Spinner = () => {
  const classes = useStyles();

  return (
    <span className={classes.loader}>...</span>
  )
}

export default Spinner;