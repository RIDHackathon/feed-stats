import { AppBar, IconButton, Toolbar, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

import logo from './logo.svg';

const styles = (theme: {}) =>
  createStyles({
    flex: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: 'red',
      textAlign: 'center',
    },
  });

interface IProps extends WithStyles<typeof styles> {}

class App extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <Grid container={true} spacing={24}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Stats
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item={true} className="App-header" md={6}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Grid>
        <Grid item={true} className="App-intro" md={6}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
