import React, { Component } from 'react';
import Slider from 'react-slick';
import SellerRepPhoto from '../Images/sellerrep.jpg';
import BuyerRepPhoto from '../Images/buyerrep.jpg';
import Pablo from '../Images/pablo.jpg';

export class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: 'linear'
    };
    return (
      <section className='testimonials'>
        <div className='container'>
          <div className='clients'>
            <h1>
              WHAT OUR CLIENTS <span>ARE SAYING</span>
            </h1>
          </div>
        </div>
        <Slider {...settings}>
          <div className='div-test'>
            <div className='container'>
              <img className='sellerRep' src={SellerRepPhoto} alt='' />
              <p>
                "His entire office was very professional and supportive. When I
                began the sales process I questioned whether I even needed to be
                represented by an attorney, but when I ended the process I
                thanked my lucky stars that Eugene was on my team!"{' '}
                <span>- Ken and Deeny Laber</span>
              </p>
            </div>
          </div>
          <div className='div-test'>
            <div className='container'>
              <img className='sellerRep' src={BuyerRepPhoto} alt='' />
              <p>
                "Gene is very professional, thorough, good listener, and always
                working in the best interest of his clients.: ​ In the event we
                are in the market for another real estate transaction, we would
                not hesitate to reach out to Gene again, as he earned our full
                trust. <span>​-John and Iza Arbach</span>
              </p>
            </div>
          </div>
          <div className='div-test'>
            <div className='container'>
              <img className='sellerRep' src={Pablo} alt='' />
              <p>
                "Mr. Eugene Vigoa represented my husband and I in a sale last
                September. I am so glad we hired him because he made sure that
                we were protected ... ​ I will recommend him without a doubt. He
                is knowledgeable and hard working..."{' '}
                <span>-Pablo and Barbara Gonzalez</span>
              </p>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
export default Testimonials;
