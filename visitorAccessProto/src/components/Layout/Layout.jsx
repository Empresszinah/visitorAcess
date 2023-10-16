import React from 'react';
import HorizontalNav from '../Header/HorizontalNav';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <HorizontalNav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
