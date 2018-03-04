const styles = theme => ({
  form: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
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
