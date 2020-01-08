import React, { Component } from 'react';
import Logo from '../Images/vigoalogo.png';
export class Header extends Component {
  render() {
    return (
      <div className='header-law'>
        <div className='container'>
          <div className='wrapper'>
            <div className='logo '>
              <img src={Logo} alt='' />
              <div className='logo-desc'>
                Seller and Buyer Real Estate Representation
              </div>
            </div>
            <div className='operation '>
              <h4>
                {' '}
                <i className='far fa-clock'></i> 9:00 a.m. - 5:00 p.m.
              </h4>
              <h4>Our Operating Hours Mon-Fri.</h4>
              <i className='fab fa-google-plus'></i>
              <i className='fab fa-facebook'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-youtube'></i>
              <i></i>
              <i></i>
            </div>
            <div className='header-contact '>
              <h4>
                {' '}
                <i className='fas fa-phone'></i> 954-433-9784
              </h4>
              <h4>Call Us for a Free Consultation</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
