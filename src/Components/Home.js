import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Service from './Service';
import Eugene from './Eugene';
import Testimonials from './Testimonials';

export class Home extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Service />
        <Eugene />
        <Testimonials />
      </div>
    );
  }
}

export default Home;
