import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Logo } from '../Logo';

const useStyles = makeStyles(({
  root: {},
  toolbar: {
    height: 64
  }
}));

export function TopBar() {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root)}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};
