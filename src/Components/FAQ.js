import React, { Component } from 'react';
import Slider from 'react-slick';

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
      <section className='faq'>
        <div className='container'>
          <div className='clients'>
            <h1>
              FREQUENTLY ASKED <span>QUESTIONS</span>
            </h1>
          </div>
        </div>
        <Slider {...settings}>
          <div className='div-test'>
            <div className='container'>
              <h3>Am I allowed to Sell My House without a Realtor?</h3>
              <p>
                In Florida, you are not required to have a realtor to sell your
                home or buy your home. In fact, you can do already that's
                necessary to sell your home without a realtor. You can fix up
                your house. You can market your home. You can fill out the
                contract yourself with the buyer, and you can even go to the
                closing by yourself without a realtor. The only thing that's
                necessary is that you have the desire and the willingness to go
                and get the information to do so, but no, absolutely. You
                definitely can sell your home without a realtor.{' '}
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.youtube.com/watch?v=lL5M6Uy2ul4&feature=emb_err_watch_on_yt'
                >
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className='div-test'>
            <div className='container'>
              <h3>Can a buyer sue a seller for backing out of the contract?</h3>
              <p>
                A real estate contract is a legally binding contract between the
                seller and the buyer. The contract's going to have the legal
                rights of both the seller and the buyer and the remedies that
                both parties can avail themselves in case there's a breach. So,
                if the seller decides not to sell the property and not to close,
                and it's no fault of the buyer, then the buyer might have a
                legal cause of action against the seller, for example, for
                specific performance. But if you find yourself in that
                situation, that is when you need to speak to an attorney and see
                what your legal rights are.
              </p>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}
export default Testimonials;
