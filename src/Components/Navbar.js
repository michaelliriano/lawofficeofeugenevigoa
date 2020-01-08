import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='nav-menu'>
          <a href='/'>Home</a>
          <a href='/'>Services</a>
          <a href='/'>Educational Videos</a>
          <a href='/'>FAQ</a>
          <a href='/'>Testimonials</a>
          <a href='/'>About Me</a>
          <a href='/'>Contact Us</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
