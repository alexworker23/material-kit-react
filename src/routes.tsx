import React from 'react';
import { Navigate } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { MainLayout } from './layouts/MainLayout';
import { AccountView } from './containers/AccountView';
import { CustomerListView } from './containers/CustomerListView';
import { DashboardView } from './containers/DashboardView';
import { LoginView } from './containers/LoginView';
import { NotFoundView } from './containers/NotFoundView';
import { ProductListView } from './containers/ProductListView';
import { RegisterView } from './containers/RegisterView';
import { SettingsView } from './containers/SettingsView';

export const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];
