import commonStyles, { BORDER, BREAKPOINTS, COLORS, FONT, TRANSITIONS } from 'assets/jss/common';

const styles = {
  button: {
    ...commonStyles.button
  },

  input: {
    ...commonStyles.input,
    ...commonStyles.inputLarge
  },

  inputWithAddon: {
    ...commonStyles.inputWithAddon
  },

  inputAddonPre: {
    ...commonStyles.inputAddonPre,
    ...commonStyles.inputAddonLarge
  },

  labelWithAddon: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 5,

    '& label': {
      ...commonStyles.label
    }
  },

  tokenBlock: {
    padding: '10px 0'
  },

  balanceButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    color: COLORS.textSecondaryDark,
    fontSize: FONT.size.normal,

    '& span': {
      color: COLORS.textLight,
      fontWeight: 'bold',
      textDecoration: 'underline',
    }
  },

  sliderWrapper: {
    padding: '0 10px'
  },
  sliderRoot:{
    color: COLORS.primary + ' !important',
  },
  sliderMarkLabel:{
    color: COLORS.primary + ' !important',
  },
};

export default styles;