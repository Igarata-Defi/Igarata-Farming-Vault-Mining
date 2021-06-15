import commonStyles, { BORDER, BREAKPOINTS, COLORS, FONT, TRANSITIONS } from 'assets/jss/common';

const styles = {
  ...TRANSITIONS.opacity,
  ...TRANSITIONS.fade,

  dialog: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    overflowY: 'auto',
    zIndex: 10,

    '& *': {
      fontFamily: FONT.family + ' !important',
    }
  },
  wrapper: {
    minHeight: '100vh',
    padding: '0 10px',
    textAlign: 'center',
  },
  overlay: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    background: COLORS.bgOverlay,
  },
  trick: {
    display: 'inline-block',
    height: '100vh',
    verticalAlign: 'middle',
  },
  content: {
    ...commonStyles.card,

    display: 'inline-block',
    width: '100%',
    padding: '24px',
    maxWidth: BREAKPOINTS.xs,
    textAlign: 'left',

    transform: 'translateX(0) translateY(0)'
  },
  close: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 24,
    right: 24,
    border: 'none',
    borderRadius: BORDER.radiusSmall,
    background: COLORS.bgLight,
    cursor: 'pointer',
    transition: 'transform .1s ease-in-out',

    '&:hover': {
      transform: 'scale(1.05)'
    },

    '&:before, &:after': {
      position: 'absolute',
      top: 8,
      left: 14,
      content: '" "',
      height: 15,
      width: 2,
      backgroundColor: COLORS.textSecondaryDark
    },
    '&:before': {
      transform: 'rotate(45deg)',
    },
    '&:after': {
      transform: 'rotate(-45deg)'
    }
  },
  controls: {
    marginTop: '20px',
    textAlign: 'right',
  },
  title: {
    ...commonStyles.h3,

    margin: '3px 0 25px'
  },
}

export default styles;