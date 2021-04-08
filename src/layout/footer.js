import React from 'react';

const Footer = () => {
  return (
    <footer class='bg-light text-center text-lg-start'>
      <div
        class='text-center p-3'
        style={{
          'background-color': 'rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          bottom: '0rem',
          height: '6%',
          left: '0px',
          right: '0px',
          overflow: 'hidden',
        }}
      >
        © 2020 Copyright:
        <a class='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
