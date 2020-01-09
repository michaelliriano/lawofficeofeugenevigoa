import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default PageWrapper;
