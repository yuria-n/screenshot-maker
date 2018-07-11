import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { StyleRules, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';

import { Github } from '../icons';

const Header = ({ classes }: WithStyles<ClassKey>) => (
  <AppBar position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="title" color="inherit">
        Screenshot maker
      </Typography>
      <IconButton aria-haspopup="true" href="" color="inherit">
        <Github />
      </IconButton>
    </Toolbar>
  </AppBar>
);

type ClassKey = 'toolbar';
const styles: StyleRulesCallback<ClassKey> = (): StyleRules<ClassKey> => ({
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default withStyles(styles)(Header);
