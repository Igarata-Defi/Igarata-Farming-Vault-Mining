import commonStyles, { BORDER, COLORS, FONT, TRANSITIONS } from 'assets/jss/common';

const styles = {
  ...TRANSITIONS.slide,

  pool: {
    ...commonStyles.card,
    position: 'relative',
    marginBottom: 14,

    '&.highlighted': {
      paddingTop: 36
    }
  },

  highlightLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 12px',

    color: COLORS.primary,
    fontSize: FONT.size.small,
    fontWeight: 600,
    lineHeight: FONT.size.h2,
    textTransform: 'uppercase',

    background: COLORS.primaryOpaque,
    borderRadius: [BORDER.radius, 0, BORDER.radiusSmall, 0],

    '& svg': {
      position: 'relative',
      width: 18,
      height: 18,

      top: -1,
      marginRight: 5,

      verticalAlign: 'middle',
      display: 'inline-block',
    }
  }
};

export default styles;