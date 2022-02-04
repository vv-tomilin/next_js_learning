import React from 'react';

import Footer from './footer/Footer';

const Layout: React.FC = (props) => {
  return (
    <div>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
