import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './_components/Footer/Footer';
import Footer from './_components/NavBar/NavBar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        {/* The Outlet component will render the matching page */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;