import React, { Component } from 'react';
import Photo from '../Images/miami.jpg';

export class Eugene extends Component {
  render() {
    return (
      <div className='overlay'>
        <img src={Photo} alt='' className='profile-picture' />
        <h1 className='title-law'>
          South Florida <span className='highlightyellow'>Real Estate</span> Law
          Firm
        </h1>
        <h2 className='hero'>
          "If you are selling or buying a home, you need to protect your legal
          rights!" -
        </h2>
        <h2 className='eve'>Eugene Vigoa, Esq.</h2>
      </div>
    );
  }
}

export default Eugene;
