import commonStyles, { COLORS, FONT } from 'assets/jss/common';

const styles = {
  buttonPrimary: {
    ...commonStyles.button,
  },

  buttonSecondary: {
    ...commonStyles.buttonSecondary
  },

  alert: {
    ...commonStyles.alert,
    marginBottom: 20,
  },

  withdrawTokenSelectWrapper: {
    display: 'flex',
    marginBottom: 20,

    color: COLORS.textSecondaryLight,
    fontSize: FONT.size.normal
  },

  withdrawTokenSelect: {
    width: 150,
    flex: '0 0 auto',

    margin: '4px 0 0 10px',
  },

  tokenApproveBlock: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,

    '& .image': {
      width: 80,
      height: 80,
      marginRight: 25,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    '& .image img': {
      maxWidth: '100%',
      maxHeight: '100%'
    },

    '& .name': {
      ...commonStyles.h3,
      marginBottom: 15
    }
  }
}

export default styles;