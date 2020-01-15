import React, { Component } from 'react';
import Header from './Header';

import NavMenu from './ResponsiveMenu';

export class PageWrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
      </div>
    );
  }
}

export default PageWrapper;
