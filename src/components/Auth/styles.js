const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    overflow: 'auto',
  },
  form: {
    margin: 'auto',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'auto',
  },
  textField: {
    margin: theme.spacing.unit,
    width: 200,
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: '10px',
  },
});

export default styles;
