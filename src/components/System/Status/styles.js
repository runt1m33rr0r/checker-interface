const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'auto',
  },
  content: {
    textAlign: 'center',
    overflow: 'auto',
  },
  text: {
    marginBottom: '10px',
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    minWidth: '200px',
  },
});

export default styles;
