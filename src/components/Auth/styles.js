const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    minHeight: '400px',
    overflowY: 'auto',
  },
  textField: {
    margin: theme.spacing.unit,
    width: 200,
  },
});

export default styles;
