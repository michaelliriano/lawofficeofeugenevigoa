import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
        <section className='footer'>
          <div className='contact-us'>
            <h2>
              CONTACT <span>US</span>
              <hr />
            </h2>
            <p>
              Email:{' '}
              <a style={{ color: 'white' }} href='mailto: eugene@vigoalaw.com'>
                eugene@vigoalaw.com
              </a>
            </p>
            <p>
              Tel:{' '}
              <a style={{ color: 'white' }} href='tel:5551234567'>
                (954)433-9784
              </a>
            </p>
            <p>
              Cell:{' '}
              <a style={{ color: 'white' }} href='tel:5551234567'>
                (305)433-3587
              </a>
            </p>
          </div>
          <div className='our-office'>
            <h2>
              OUR <span>OFFICE</span>
            </h2>
            <hr />
            <p>Hours of Operation: 9:00am - 5:00pm </p>
            <p>3 SW 129th Avenue, Suite 202</p>
            <p>Pembroke Pines, FL 33027</p>
          </div>
          <div className='social-media'>
            <h2>
              SOCIAL <span>MEDIA</span>
            </h2>
            <hr />
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
        </section>
        <section className='copy-right'>
          <div>
            <p>Copyright © 2020 Law Office of Eugene Vigoa, PA</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
