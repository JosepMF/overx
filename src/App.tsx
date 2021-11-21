import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './auth/AuthProvider';
import Layout from './components/layouts/Layout';
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
