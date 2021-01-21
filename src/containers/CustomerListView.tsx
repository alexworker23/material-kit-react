import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import { Page } from '../layouts/Page';
import { customersData, Results, Toolbar} from '../components/customerList';
import { ICustomTheme } from '../theme'

const useStyles = makeStyles((theme: ICustomTheme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

export function CustomerListView() {
  const classes = useStyles();
  const [customers] = useState(customersData);

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};
