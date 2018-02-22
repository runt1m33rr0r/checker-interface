const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'absolute',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: '56px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 33,
      marginTop: '64px',
    },
  },
  children: {
    width: '100%',
    height: '100%',
  },
  hidden: {
    display: 'none',
  },
  lampOff: {
    color: 'black',
  },
  lampOn: {
    color: 'inherit',
  },
  flex: {
    flex: 1,
  },
});

export default styles;
