import commonStyles, { BORDER, COLORS, FONT, TRANSITIONS } from 'assets/jss/common';

const styles = {
  ...TRANSITIONS.fade,

  wrapper: {
    position: 'relative'
  },

  select: {
    width: '100%',
    position: 'relative',
    padding: '10px 34px 8px 14px',

    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal,
    lineHeight: '20px',

    background: COLORS.bgSurface,
    border: 'none',
    borderRadius: BORDER.radius,

    textAlign: 'left',
    cursor: 'pointer',

    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    '&.with-icon': {
      paddingLeft: 44
    },

    '&.bg-dark': {
      background: COLORS.bgDark
    }
  },

  icon: {
    position: 'absolute',

    width: 20,
    height: 20,

    top: 10,
    left: 14,

    '& svg': {
      color: COLORS.textSecondaryDark,

      width: '100%',
      height: '100%',
    }
  },

  chevron: {
    position: 'absolute',
    width: 16,
    height: 16,

    top: '50%',
    right: 10,
    marginTop: -7,

    transition: 'transform .2s ease-in-out',

    '& svg': {
      color: COLORS.textSecondaryDark,
      width: '100%',
      height: '100%',
    },

    '&.open': {
      transform: 'rotate(180deg)'
    }
  },

  options: {
    ...commonStyles.card,

    boxShadow: '-4px 8px 12px rgba(0, 0, 0, 0.2)',

    padding: '12px',

    position: 'absolute',
    top: 45,
    minWidth: '100%',
    // maxHeight: '18rem',
    overflow: 'auto',

    zIndex: 2,

    listStyle: 'none'
  },

  option: {
    position: 'relative',
    padding: '8px 18px',

    color: COLORS.textSecondaryDark,
    fontSize: FONT.size.normal,
    lineHeight: '24px',

    borderRadius: BORDER.radius,

    cursor: 'pointer',

    '&:hover': {
      color: COLORS.textHeader,
      background: COLORS.bgDark,
    },

    '&.active': {
      color: COLORS.textHeader
    },

    '&.multiple': {
      paddingRight: 50,
    },

    '&.with-icon': {
      paddingLeft: 30
    },

    '&.active svg': {
      position: 'absolute',
      top: '50%',
      right: 8,
      marginTop: -10,

      color: COLORS.primary,
      width: 20,
      height: 20,
    }
  }
};

export default styles;