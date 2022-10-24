import React from 'react';
import { Navbar, Menu } from './styles';

const Header = () => (
  <Navbar title="Rockr Blog">
    <h1>Rockr Blog</h1>
    <Menu>
      <a href="/">Posts</a>
      <a href="/">Contact</a>
    </Menu>
  </Navbar>
);

export default Header;
