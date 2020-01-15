import React, { Component } from 'react';
import Headshot from '../Images/headshot.jpg';

export class Eugene extends Component {
  render() {
    return (
      <section className='about-vigoa'>
        <div className='about-eugene'>
          <h3>
            ABOUT <span>EUGENE VIGOA</span>
          </h3>
          <p>
            Eugene Vigoa practices in the area of Seller and Buyer Real Estate
            Representation. He is a graduate of Rutgers University in New
            Brunswick, New Jersey and received his Juris Doctorate degree from
            Seton Hall Law School in Newark New Jersey. He is a member of the
            Florida Bar since 2004 and is also a member of Broward County Bar
            Association. Mr. Vigoa is a native of Cuba and is fluent in the
            Spanish language.
          </p>
          <p>
            Mr. Vigoa is experienced in real estate transactions and has worked
            for title companies and in mortgage finance as a principal
            representative. He is currently also associated as the in-house
            attorney for First Choice Title Services & Escrow, Inc., in Pembroke
            Pines, Florida.
          </p>
          <p>
            Mr. Vigoa represents individual sellers and buyers as well as
            investors with large real estate portfolios. However, he gives all
            his clients the same attention and dedication regardless of their
            real estate needs.{' '}
          </p>
          <p>
            In addition, Mr. Vigoa is a consultant to real estate agents and
            brokers and conducts training seminars for numerous realty
            companies. Some of the topics he lectures on include: "Common
            Mistakes Realtors Make in Filling out the Florida "As Is" contract",
            "Municipal Lien Issues", "Red Flags in the Sales Contract" and many
            others.
          </p>
        </div>
        <div className='bio'>
          <div className='profile'>
            <img className='headshot' src={Headshot} alt='' />
            <p>"I'm Never Too Busy for Your Referrals!"</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Eugene;
