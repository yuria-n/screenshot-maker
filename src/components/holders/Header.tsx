import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { StyleRules, WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { Github } from '@components';

const Header = ({ classes }: WithStyles<ClassKey>) => (
  <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="title" color="inherit">
        Screenshot maker
      </Typography>
      <IconButton
        aria-haspopup="true"
        href="https://github.com/Julia0709/screenshot-maker"
        target="_blank"
        color="inherit"
      >
        <Github />
      </IconButton>
    </Toolbar>
  </AppBar>
);

type ClassKey = 'toolbar';
const styles: StyleRules<ClassKey> = {
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default withStyles(styles)(Header);
