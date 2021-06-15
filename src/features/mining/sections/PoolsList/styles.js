import commonStyles, { MEDIA } from 'assets/jss/common';

const styles = {
  ...commonStyles,

  pools: {
    marginTop: 24,


    [MEDIA.mobile]: {
      marginTop: 5
    }
  }
};

export default styles;