import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Login from './components/login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and Dashboard routes outside the layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* All other routes use layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
