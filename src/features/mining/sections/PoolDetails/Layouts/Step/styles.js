import { BREAKPOINTS, COLORS, FONT } from 'assets/jss/common';

const color = COLORS.primary;

const styles = {
  step: {
    height: '30px',
    marginTop: '10px',
    marginBottom: '25px',
    color: color,
    position: 'relative',
  },
  stepEmpty: {
    ['@media(max-width: ' + BREAKPOINTS.sm + ')']: {
      display: 'none'
    },
  },

  stepLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '1px',
    marginTop: '15px',
    left: '0',
    backgroundColor: color,
  },

  stepBg: {
    content: '',
    position: 'absolute',
    left: '-16px',
    width: '16px',
    height: '100%',
    background: COLORS.bgSurface,
  },

  stepNumber: {
    position: 'relative',
    display: 'inline-block',
    border: '2px solid ' + color,
    fontSize: FONT.size.bigger,
    fontWeight: 500,
    width: '30px',
    height: '30px',
    textAlign: 'center',
    borderRadius: '15px',
    lineHeight: '27px',
    backgroundColor: COLORS.bgSurface
  },

  stepLabel: {
    position: 'relative',
    padding: '0 15px',
    backgroundColor: COLORS.bgSurface,
    fontSize: FONT.size.bigger,
    fontWeight: 500
  },
};

export default styles;