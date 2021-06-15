import commonStyles, { BORDER, BREAKPOINTS, COLORS, FONT, MEDIA } from 'assets/jss/common';

const styles = {
  detailsSection: {
    paddingLeft: '45px',

    ['@media(max-width: ' + BREAKPOINTS.md + ')']: {
      marginBottom: 20
    },

    [MEDIA.mobile]: {
      '&.without-steps': {
        paddingLeft: 0,
        textAlign: 'center'
      }
    }
  },

  balance: {
    ...commonStyles.h3,
    fontWeight: 'bold',
    margin: '11px 0 3px',

    ['@media(min-width: ' + BREAKPOINTS.md + ') and (max-width: ' + BREAKPOINTS.lg + ')']: {
      fontSize: '20px'
    },
  },
  balanceSecondary: {
    color: COLORS.textHeader,
    fontSize: FONT.size.bigger,
    fontWeight: 500,
    lineHeight: FONT.size.bigger,
    margin: '5px 0 7px',

    ['@media(min-width: ' + BREAKPOINTS.md + ') and (max-width: ' + BREAKPOINTS.lg + ')']: {
      fontSize: '15px'
    },
  },
  balanceDescription: {
    ...commonStyles.textSecondary,
    lineHeight: FONT.size.normal,
    marginBottom: '25px',

    ['@media(min-width: ' + BREAKPOINTS.md + ') and (max-width: ' + BREAKPOINTS.lg + ')']: {
      marginBottom: '10px'
    }
  },

  balanceWithLogo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -10,

    [MEDIA.mobile]: {
      justifyContent: 'center',
      textAlign: 'left'
    }
  },
  balanceLogo: {
    width: 45,
    height: 45,
    flex: '0 0 auto',
    margin: '0 15px 10px 0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      maxWidth: 45,
      maxHeight: 45
    }
  },

  balanceWithPadding: {
    padding: '12px 0'
  },

  button: {
    ...commonStyles.button
  },

  divider: {
    height: 1,
    background: COLORS.border,
    margin: '10px 0 30px'
  },

  descriptionSection: {
    minHeight: '100%',
    padding: '12px 16px',

    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal,

    background: COLORS.bgDark,
    borderRadius: BORDER.radius,

    [MEDIA.mobile]: {
      marginTop: 20,
      minHeight: 0
    },
  },

  statsSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 10px',

    '& .header': {
      marginBottom: 10,
      textAlign: 'center',

      color: COLORS.textLight,
      fontSize: FONT.size.h4,
    },

    '& .item': {
      display: 'flex',
      width: '100%',

      '& span': {
        width: '50%',
      },

      '& span:first-child': {
        paddingRight: 15,

        textAlign: 'right',
        color: COLORS.textLight,

        borderRight: '1px solid ' + COLORS.border
      },

      '& span:last-child': {
        paddingLeft: 15
      },

      '& .small': {
        display: 'block',
        marginTop: -4,

        color: COLORS.textSecondaryDark,
        fontSize: FONT.size.small,
      },

      '&.warning *': {
        color: COLORS.primary + ' !important'
      }
    },
  },

  statsContent: {
    width: '100%'
  },

  boostRewards: {
    paddingTop: 10
  },

  boostHeader: {
    position: 'relative',
    margin: '40px 0 20px',

    color: COLORS.primary,
    fontSize: FONT.size.h3,
    fontWeight: 600,

    color: COLORS.textSecondaryDark,

    '&.active': {
      color: COLORS.primary,

      '& svg': {
        animation: '$pulse 1.5s ease-in-out infinite'
      }
    },

    '&:after': {
      content: '""',

      position: 'absolute',
      height: 1,
      top: '50%',
      left: 0,
      right: 0,
      marginTop: -1,

      background: COLORS.textSecondaryDark
    },

    '&.active:after': {
      background: COLORS.primary
    },

    '& span': {
      position: 'relative',
      paddingRight: 20,
      background: COLORS.bgSurface,
      zIndex: 2,
    }
  },

  boostIcon: {
    position: 'relative',
    width: 34,
    height: 34,

    top: -3,
    margin: '0 12px 0 0',

    verticalAlign: 'middle',
    display: 'inline-block',
  },

  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)'
    },
    '50%': {
      transform: 'scale(1.3)'
    },
    '100%': {
      transform: 'scale(1)'
    },
  },



  statsLinks: {
    textAlign: 'center',
    paddingTop: 10,

    '& a': {
      margin: '0 15px',

      color: COLORS.primary + ' !important',
      fontSize: FONT.size.normal,
      textDecoration: 'underline',

      '& svg': {
        width: 16,
        height: 16,
        marginRight: 6,
        marginTop: -3,
        verticalAlign: 'middle',
        display: 'inline-block'
      }
    }
  }
};

export default styles;