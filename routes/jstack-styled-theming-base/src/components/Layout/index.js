import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import { Nav } from './styles';

import Routes from '../../routes';

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/213213">Post</Link>
      </Nav>
      <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
