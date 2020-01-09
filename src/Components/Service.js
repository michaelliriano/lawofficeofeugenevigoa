import React, { Component } from 'react';

export class Service extends Component {
  render() {
    return (
      <section className='services'>
        <div className='container'>
          <div className='service-icon'>
            <i class='fas fa-sign'></i>
            <h3>
              Seller <br /> Representation
            </h3>
          </div>
          <div className='service-icon'>
            <i class='fas fa-home'></i>
            <h3>Buyer Representation</h3>
          </div>
          <div className='service-icon'>
            <i class='fas fa-hand-holding-usd'></i>
            <h3>Investors</h3>
          </div>
          <div className='service-icon'>
            <i class='fas fa-graduation-cap'></i>
            <h3>Realtor Training</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
