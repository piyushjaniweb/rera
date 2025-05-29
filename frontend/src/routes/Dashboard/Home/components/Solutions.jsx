import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { solutions } from '../../../../db';
import { Container } from "../../../../components/Layout";
import { Link } from 'react-router-dom';
import { PrimaryBtn } from '../../../../components/Button';
import { H2 } from '../../../../components/Typography';

const Solutions = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container>
      <H2 className='text-center py-2 font-bold'>Project Summary Card</H2>
      
      <div className="mb-20 py-8 font-helvetica tracking-wide">
        <Slider {...settings} className='pb-4'>
          {solutions.map((solution, index) => (
            <div key={index} className="px-2 pb-4"> 
              <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                <div className='relative overflow-hidden'>
                  <a href={solution.link} target="_blank" rel="noopener noreferrer">
                    <img
                      decoding="async"
                      src={solution.image}
                      alt={solution.title}
                      className="h-64 object-cover w-full rounded-t-lg transition-transform duration-300 transform hover:scale-105"
                    />
                  </a>
                </div>

                <div className="flex flex-col items-center text-center px-4 py-6">

                  {/* New Fields */}
                  <div className="mt-4 font-bold text-left w-full">
                    <p className="text-sm  text-gray-700">Price Range: {solution.priceRange}</p>
                    <p className="text-sm  text-gray-700">Status: {solution.status}</p>
                    <p className="text-sm  text-gray-700">Launch Date: {solution.launchDate}</p>
                    <p className="text-sm  text-gray-700">Possession: {solution.possession}</p>
                    <p className="text-sm  text-gray-700">RERA No: {solution.reraNo}</p>
                  </div>

                  {/* Know More Button */}
                  <div className="mt-6 hover:scale-105">
                    <PrimaryBtn>
                      <Link to={''} className="">
                        Know More
                      </Link>
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Solutions;
