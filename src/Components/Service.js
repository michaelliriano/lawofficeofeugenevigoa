import React, { Component } from 'react';

export class Service extends Component {
  render() {
    return (
      <section className='services'>
        <div className='container'>
          <h3 className='service-title'>
            PRACTICE <span>AREAS</span>
          </h3>
        </div>
        <div className='container'>
          <div className='service-icon'>
            <i className='fas fa-sign'></i>
            <h3>
              Seller <br /> Representation
            </h3>
          </div>
          <div className='service-icon'>
            <i className='fas fa-home'></i>
            <h3>
              Buyer <br /> Representation
            </h3>
          </div>
          <div className='service-icon'>
            <i className='fas fa-hand-holding-usd'></i>
            <h3>Investors</h3>
          </div>
          <div className='service-icon'>
            <i className='fas fa-graduation-cap'></i>
            <h3>
              Realtor <br /> Training
            </h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
