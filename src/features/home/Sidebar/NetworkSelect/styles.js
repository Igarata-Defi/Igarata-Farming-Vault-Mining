import commonStyles, { BORDER, COLORS, FONT, TRANSITIONS } from 'assets/jss/common';

const styles = {
  ...TRANSITIONS.fade,

  wrapper: {
    position: 'relative'
  },

  network: {
    position: 'relative',
    height: 32,
    padding: '6px 16px',
    marginBottom: 10,

    background: COLORS.bgLight,
    borderRadius: BORDER.radius,

    color: COLORS.textLight,
    fontSize: FONT.size.small,
    lineHeight: '21px',

    cursor: 'pointer',

    '& img': {
      width: 20,
      height: 20,
      marginRight: 14,
      marginTop: -3
    },

    '& svg': {
      width: 20,
      height: 20,
      marginRight: 14,
      verticalAlign: 'middle',
      display: 'inline-block',
      marginTop: -2,
    }
  },

  networkStatus: {
    width: 14,
    height: 14,
    borderRadius: 7,
    position: 'absolute',
    top: 9,
    right: 9,

    background: 'orange',

    '&.connected': {
      background: '#166E57'
    }
  },

  networkSelect: {
    ...commonStyles.card,

    position: 'absolute',
    top: 38,
    minWidth: '100%',
    padding: '6px',

    background: COLORS.bgLight,
    boxShadow: '-4px 8px 12px rgba(0, 0, 0, 0.6)',

    '& .item': {
      padding: '8px 10px',

      color: COLORS.textLight,
      fontSize: FONT.size.small,

      borderRadius: BORDER.radius,

      cursor: 'pointer',

      '&:hover': {
        background: COLORS.bgDark,
      },

      '& img': {
        width: 20,
        height: 20,
        marginRight: 14
      }
    }
  }
};

export default styles;