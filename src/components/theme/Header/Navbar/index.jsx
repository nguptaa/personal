import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <span className="grey-color"> &lt;</span>
      <span className="logo-name">Nikhil Gupta</span>
      <span className="grey-color">/&gt;</span>
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
