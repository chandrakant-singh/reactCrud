import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div
        id='content'
        style={{
          position: 'absolute',
          top: '100px',
          bottom: '0px',
          left: '0px',
          right: '0px',
          overflow: 'auto',
        }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
