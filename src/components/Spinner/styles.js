import { COLORS } from 'assets/jss/common';

const size = '2.8em';
const thickness = '0.4em';

const styles = {
  loader: {
    display: 'block',
    borderRadius: '50%',
    width: size,
    height: size,
    overflow: 'hidden',

    margin: '-1px auto',
    fontSize: '8px',
    position: 'relative',
    textIndent: '-10em',
    borderTop: thickness + ' solid rgba(0, 0, 0, 0.2)',
    borderRight: thickness + ' solid rgba(0, 0, 0, 0.2)',
    borderBottom: thickness + ' solid rgba(0, 0, 0, 0.2)',
    borderLeft: thickness + ' solid ' + COLORS.primaryContrast,
    transform: 'translateZ(0)',
    animation: '$spinner 1.1s infinite linear',

    '&:after': {
      borderRadius: '50%',
      width: size,
      height: size,
    }
  },
  '@keyframes spinner': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
};

export default styles;