import React from 'react';
import { Container } from "../../../../components/Layout";
import Slider from "react-slick";
import image1 from "../../../../assets/home/HeroSection/image1.webp";
import image2 from "../../../../assets/home/HeroSection/image2.webp";
import image3 from "../../../../assets/home/HeroSection/image3.webp";
import { PrimaryBtn } from '../../../../components/Button';

const sliderData = [
    {
        image: image1,
        text: "Welcome to Our Platform",
        projectName: "Sampath Group 1",
        reraNo: 25052582,
        developerName: 'Developer 1'
    },
    {
        image: image2,
        text: "Explore Innovative Solutions",
        projectName: "Sampath Group 2",
        reraNo: 25052582,
        developerName: 'Developer 2'
    },
    {
        image: image3,
        text: "Join Us Today",
        projectName: "Sampath Group 3",
        reraNo: 25052582,
        developerName: 'Developer 3'
    },
];

function HeroSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <Container>
            <div className='rounded-4xl my-4 overflow-hidden'>
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <div key={index} className="relative">
                            {/* Image */}
                            <img
                                src={slide.image}
                                alt={`slide-${index}`}
                                className="w-full h-[600px] object-cover rounded-4xl"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black opacity-20 rounded-4xl"></div>

                            {/* Text Overlay */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                          text-white font-bold text-center w-full px-5
                                          [text-shadow:_2px_2px_4px_rgba(0,0,0,0.7)]">
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-col'>
                                        <p className='text-4xl'>{slide.projectName}</p>
                                        <p className='text-md'>{slide.text}</p>
                                    </div>
                                    <PrimaryBtn>Download Brochure</PrimaryBtn>
                                    <PrimaryBtn>Schedule a Visit</PrimaryBtn>
                                    <div className='flex flex-col'>
                                        <p className='text-4xl'>{slide.reraNo}</p>
                                        <p className='text-md'>{slide.developerName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    );
}

export default HeroSection;
