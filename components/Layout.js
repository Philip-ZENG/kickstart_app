import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';
import 'semantic-ui-css/semantic.min.css';

// Create a layout component which has a header or footer section which can be applied to every page
// The content passed into this component will be placed in `props.children` field
const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;