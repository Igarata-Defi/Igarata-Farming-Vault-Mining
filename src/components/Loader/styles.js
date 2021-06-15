const styles = theme => ({

  loader: {
    display: 'inline-block',
    marginBottom: -3,
    boxShadow: '0 4px 10px 0 rgba(33, 33, 33, 0.15)',
    background: '#94a3b8',
    opacity: 0.2,
    borderRadius: '4px',
    position: 'relative',
    overflow: 'hidden',

    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '-75%',
      top: 0,
      height: '100%',
      width: '75%',
      background: 'linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)',
      animation: '$load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite'
    }
  },

  '@keyframes load': {
    'from': {
      left: '-75%'
    },
    'to': {
      left: '100%'
    }
  }

});

export default styles;