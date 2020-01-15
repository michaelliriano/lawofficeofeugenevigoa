import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const NavMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand='md'>
        <NavbarBrand href='/'></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/services'>Services</Link>
            </NavItem>
            <NavItem>
              <Link to='/faq'>FAQ</Link>
            </NavItem>
            <NavItem>
              <Link to='/testimonials'>Testimonials</Link>
            </NavItem>
            <NavItem>
              <Link to='/about-me'>About Me</Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
