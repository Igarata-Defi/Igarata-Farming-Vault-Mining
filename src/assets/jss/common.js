export const COLORS = {
  primary: '#FEBF32',
  primaryContrast: '#1B1717',
  primaryOpaque: 'rgba(254, 191, 50, 0.2)',

  textMain: '#ffffff',
  textHeader: '#FCFCFC',
  textLight: '#EEEEEE',
  textSecondaryLight: '#B5B7BF',
  textSecondaryDark: '#93959C',

  green: '#58D786',

  bgDarkest: '#131313',
  bgDark: '#1D1E24',
  bgSurface: '#23262B',
  bgLight: '#30323B',
  bgOverlay: 'rgba(16, 20, 26, 0.7)',

  border: '#33363D'
};

export const FONT = {
  family: '"Poppins", sans-serif',

  size: {
    h2: '28px',
    h3: '22px',
    h4: '18px',

    bigger: '15px',
    normal: '14px',
    small: '13px',
  }
}

export const BORDER = {
  radius: 7,
  radiusSmall: 10
}

export const TRANSITIONS = {
  slide: {
    transitionSlide: {
      overflow: 'hidden',
      transition: 'max-height 0.25s linear',
    },

    transitionSlideClosed: {
      maxHeight: 0,
    },

    transitionSlideOpen: {
      maxHeight: 300,
    }
  },

  opacity: {
    transitionOpacity: {
      transition: 'opacity .2s cubic-bezier(0, 0, 0.2, 1)'
    },
    transitionOpacityClosed: {
      opacity: 0,
    },
    transitionOpacityOpen: {
      opacity: 1,
    }
  },

  fade: {
    transitionFade: {
      transition: 'opacity .2s cubic-bezier(0, 0, 0.2, 1), transform .2s cubic-bezier(0, 0, 0.2, 1)'
    },
    transitionFadeClosed: {
      opacity: 0,
      transform: 'scale(.95) !important'
    },
    transitionFadeOpen: {
      opacity: 1,
      transform: 'scale(1) !important'
    }
  }
}

export const BREAKPOINTS = {
  xs: '444px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}

export const MEDIA = {
  mobile: '@media (max-width: ' + BREAKPOINTS.md + ')'
}

const styles = {
  card: {
    background: COLORS.bgSurface,
    borderRadius: BORDER.radius,
    padding: 20,
    boxShadow: '-4px 8px 12px rgba(0, 0, 0, 0.05)'
  },

  h2: {
    margin: '0 0 10px',

    color: COLORS.textHeader,
    fontSize: FONT.size.h2,
    fontWeight: 500,
  },

  h3: {
    margin: '0 0 10px',

    color: COLORS.textHeader,
    fontSize: FONT.size.h3,
    fontWeight: 500,
  },

  h4: {
    margin: '0 0 5px',

    color: COLORS.textHeader,
    fontSize: FONT.size.h4,
    lineHeight: '18px',
    fontWeight: 500,
  },

  textSecondary: {
    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal
  },

  button: {
    position: 'relative',
    padding: '10px 15px',

    color: COLORS.primaryContrast,
    fontSize: FONT.size.bigger,
    fontWeight: 500,
    lineHeight: '20px',
    textAlign: 'center',

    border: 'none',
    borderRadius: '7px',

    background: COLORS.primary,

    cursor: 'pointer',
    transition: 'transform .1s ease-in-out',

    '& svg': {
      width: 20,
      height: 20,
      marginRight: 10,
      verticalAlign: 'middle',
      display: 'inline-block',
      marginTop: -5
    },

    '&:link, &:visited, &:hover, &:active': {
      color: COLORS.primaryContrast,
      background: COLORS.primary
    },

    '&:hover': {
      transform: 'scale(1.05)'
    },
  },

  buttonSecondary: {
    position: 'relative',
    padding: '10px 15px',

    color: COLORS.primary,
    fontSize: FONT.size.bigger,
    lineHeight: '20px',
    textAlign: 'center',

    border: 'none',
    borderRadius: '7px',

    background: COLORS.primaryOpaque,

    cursor: 'pointer',
    transition: 'transform .1s ease-in-out',

    '& svg': {
      width: 20,
      height: 20,
      marginRight: 10,
      verticalAlign: 'middle',
      display: 'inline-block',
      marginTop: -5
    },

    '&:hover': {
      transform: 'scale(1.05)'
    },
  },

  input: {
    width: '100%',
    padding: '10px 16px',

    color: COLORS.textLight,
    fontSize: FONT.size.normal,
    lineHeight: '18px',

    background: 'transparent',
    border: '1px solid ' + COLORS.border,
    borderRadius: BORDER.radius,
  },

  inputLarge: {
    padding: '16px',
    fontSize: FONT.size.bigger,
    fontWeight: 'bold'
  },

  inputWithAddon: {
    display: 'flex',

    '& input:nth-child(2)': {
      borderRadius: [0, BORDER.radius, BORDER.radius, 0],
    }
  },

  inputAddonPre: {
    padding: '0 12px 0 13px',

    background: COLORS.bgDark,
    border: '1px solid ' + COLORS.border,
    borderWidth: '1px 0 1px 1px',
    borderRadius: [BORDER.radius, 0, 0, BORDER.radius],

    '& img': {
      maxHeight: 26,
    }
  },

  inputAddonLarge: {
    lineHeight: '47px',
  },

  label: {
    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.bigger,
    lineHeight: FONT.size.h3
  },

  checkbox: {
    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal,
    lineHeight: FONT.size.bigger,

    position: 'relative',
    cursor: 'pointer',

    '& input': {
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      height: 0,
      width: 0,
    },

    '&:before': {
      content: '""',
      position: 'relative',
      top: 1,
      display: 'inline-block',
      marginRight: 8,
      verticalAlign: 'text-top',
      width: 16,
      height: 16,
      background: 'transparent',
      border: '1px solid ' + COLORS.border,
      borderRadius: 4,
    },

    '&.active:before': {
      background: COLORS.primary,
      borderColor: COLORS.primary
    },

    '&.active:after': {
      content: '""',
      position: 'absolute',
      top: 3,
      left: 6,
      width: 4,
      height: 9,
      borderBottom: '2px solid ' + COLORS.primaryContrast,
      borderRight: '2px solid ' + COLORS.primaryContrast,
      transform: 'rotate(45deg)'
    }
  },

  alert: {
    padding: '16px',

    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal,

    background: COLORS.bgDark,
    borderRadius: BORDER.radius,

    '&.with-icon': {
      position: 'relative',
      paddingLeft: 54,
    },

    '& .icon': {
      width: 30,
      position: 'absolute',
      top: 16,
      left: 12,
    }
  }
}

export default styles;