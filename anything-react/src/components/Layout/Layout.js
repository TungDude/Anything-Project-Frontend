import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import NavBar from './_components/NavBar/NavBar';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header on the top */}
      <header className="bg-gray-800 text-white px-4 w-full h-20 flex items-center justify-between">
        <Header />
      </header>


      {/* NavBar on the left */}
      <div className="flex flex-grow">
        {/* NavBar (left side) */}
        <div className="w-32 bg-gray-100 p-4">
          <NavBar />
        </div>

        {/* Main content area (right side) */}
        <main className="flex-grow pt-4 pl-8 bg-white">
          <Outlet />
        </main>
      </div>

      {/* Footer at the bottom */}
      <footer className="bg-gray-800 text-white p-4 w-full h-min">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
