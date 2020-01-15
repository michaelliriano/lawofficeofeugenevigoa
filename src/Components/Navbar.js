import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <nav className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/service'>Services</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/testimonials'>Testimonials</Link>
          <Link to='/about-me'>About Me</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
