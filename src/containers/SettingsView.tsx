import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import { Page } from '../layouts/Page';
import { Notifications, Password } from '../components/settings';
import { ICustomTheme } from '../theme';

const useStyles = makeStyles((theme: ICustomTheme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export function SettingsView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Settings"
    >
      <Container maxWidth="lg">
        <Notifications />
        <Box mt={3}>
          <Password />
        </Box>
      </Container>
    </Page>
  );
};
