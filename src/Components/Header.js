import React, { Component } from 'react';
import Logo from '../Images/vigoalogo.png';
export class Header extends Component {
  render() {
    return (
      <section className='header-flex'>
        <div className='header-law'>
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
            <a href='https://plus.google.com/u/0/105401351248382409722'>
              <i className='fab fa-google-plus'></i>
            </a>
            <a href='https://www.facebook.com/helpsellingmyhome/'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='https://www.linkedin.com/in/eugene-vigoa-a4579a2a'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://www.youtube.com/channel/UCrPfsrufZSCF3cWxCCvST0w'>
              <i className='fab fa-youtube'></i>
            </a>
          </div>
          <div className='header-contact '>
            <h4>
              {' '}
              <i className='fas fa-phone'></i>{' '}
              <a style={{ color: 'white' }} href='tel:5551234567'>
                (954)433-9784
              </a>
            </h4>
            <h4>Call Us for a Free Consultation</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
