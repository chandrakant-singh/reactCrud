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
          top: '3%',
          bottom: '0rem',
          left: '0rem',
          right: '0rem',
          overflow: 'auto',
          maxHeight: '100vh'
        }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
