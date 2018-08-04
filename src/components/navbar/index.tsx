import { AppBar, IconButton, Toolbar, WithStyles } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

const styles = (theme: {}) =>
  createStyles({
    flex: {
      flexGrow: 1,
    },
  });

interface IProps extends WithStyles<typeof styles> {}

const Navbar: React.SFC<IProps> = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Stats
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Navbar);
