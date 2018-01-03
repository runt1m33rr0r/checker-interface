const styles = theme => ({
  root: {
    width: '100%',
    maxHeight: '100%',
    overflow: 'auto',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  resetContainer: {
    marginTop: 0,
    padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
  },
});

export default styles;
