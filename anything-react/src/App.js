import React from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import layout
import Layout from './components/Layout/Layout';

// Import page components
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/not-found" element={<NotFound />} />

          {/* Default navigate to home */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
