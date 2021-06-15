import commonStyles, { COLORS, FONT } from 'assets/jss/common';

const styles = {
  wrapper: {
    display: 'inline',
    position: 'relative',

    '&:hover $popup': {
      display: 'block'
    }
  },

  icon: {
    position: 'relative',
    display: 'inline-block',

    width: 16,
    height: 16,

    top: -1,
    margin: '0 5px',

    verticalAlign: 'middle',
    cursor: 'pointer',
  },

  popup: {
    ...commonStyles.card,

    display: 'none',
    position: 'absolute',
    width: 'auto',
    zIndex: 2,

    padding: 12,

    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.small,
    whiteSpace: 'nowrap',

    background: COLORS.bgLight,
    boxShadow: '-4px 8px 12px rgba(0, 0, 0, 0.2)',

    '&.bottom-right': {
      top: '100%',
      left: '100%',
      margin: '-9px 0 0 -8px',
    },

    '&.bottom-left': {
      top: '100%',
      right: '100%',
      margin: '-9px -8px 0 0',
    }
  }
};

export default styles;