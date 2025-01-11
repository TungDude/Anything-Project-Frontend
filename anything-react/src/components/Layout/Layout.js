import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './_components/Footer/Footer';
import NavBar from './_components/NavBar/NavBar';

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