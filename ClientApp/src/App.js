import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import './custom.css';
import './components/login.css';
import './components/Dashboard.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route element={<Layout />}>
          {AppRoutes.map((route, idx) => {
            const { element, ...rest } = route;
            return <Route key={idx} {...rest} element={element} />;
          })}
        </Route>
      </Routes>
    );
  }
}
