import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import { Menu, Notifications, Input } from '@material-ui/icons';
import { Logo } from '../Logo';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

interface IProps {
  onMobileNavOpen: () => void;
  className?: string;
}

export function TopBar(props: IProps) {

  const { className, onMobileNavOpen } = props;
  const [notifications] = useState([]);
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      >
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Input />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
