import React from 'react';
import { Header, Menu } from './styles';

const Home = () => (
  <Header>
    <h1>Rockr Blog</h1>
    <Menu>
      <a href="/">Posts</a>
      <a href="/">Contact</a>
    </Menu>
  </Header>
);

export default Home;
