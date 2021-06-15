import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
const useStyles = makeStyles(styles);

const Loader = ({ width }) => {
  const classes = useStyles();

  return (
    <span className={classes.loader} style={{width: width || '75%'}}>
      &nbsp;
    </span>
  );
}

export default Loader;