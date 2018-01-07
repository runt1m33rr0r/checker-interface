const styles = theme => ({
  wizard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'auto',
  },
  root: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '250px',
    },
  },
});

export default styles;
