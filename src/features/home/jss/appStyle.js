import { container } from "assets/jss/material-kit-pro-react.js";
import { MEDIA, COLORS, FONT } from 'assets/jss/common';

const appStyle = {
  page: {
    backgroundColor: COLORS.bgDark,
    fontFamily: FONT.family,
    minHeight: '100vh',
    padding: '25px 25px 25px 285px',

    overflowX: 'hidden',

    '& *': {
      fontFamily: FONT.family
    },

    [MEDIA.mobile]: {
      padding: '0 0 25px'
    }
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children:{
    minHeight:'77vh',
  }
};

export default appStyle;
