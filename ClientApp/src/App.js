import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './crs/AppRoutes';
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
      <Router>
        <Layout>
          <Routes>
            {/* Routes from AppRoutes.js */}
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
            {/* Add Login and Dashboard routes */}
            <Route path="./components/login" element={<Login />} />
            <Route path="./components/Dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    );
  }
}
