const styles = theme => ({
  wizard: {
    width: '100%',
    height: `calc(100% - ${30}px)`,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
  },
  root: {
    width: '100%',
    alignSelf: 'flex-end',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '250px',
    },
  },
  finished: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
