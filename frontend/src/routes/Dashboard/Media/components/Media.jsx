import React, { useState } from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhance1, enhance2, enhance3, enhance4 } from '../../../../assets';
import { enhance } from '../../../../db';
import { media } from '../../../../db';
import { PrimaryBtn } from '../../../../components/Button';
import { Link } from 'react-router-dom';
import calendar from '../../../../assets/calendar.png'

const Team = () => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentMedia = media.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(media.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="bg-white flex flex-col items-left justify-left font-helvetica">
            <div className="my-8 mx-4 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 font-helvetica tracking-wide">
                {currentMedia.map((mediaItem, index) => (
                    <div key={index} className="py-4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className='relative overflow-hidden m-4'>
                            <a href={mediaItem.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    decoding="async"
                                    src={mediaItem.image}
                                    alt={mediaItem.title}
                                    className="h-64 object-cover w-full rounded-lg "
                                />
                            </a>
                        </div>

                        <div className="flex flex-col items-left text-left px-4 lg:py-6">
                            <p className="text-indigo-800 font-medium text-xl mt-4 lg:mt-0 flex-grow leading-8">{mediaItem.title}</p>
                            <p className="text-gray-600 mt-4 flex-grow leading-8">{mediaItem.description}</p>

                            <div className="flex items-center">
                                <img src={calendar} alt="" className='h-6 w-6 my-4' />
                                <p className="ml-2 font-light">{mediaItem.date}</p> 
                            </div>

                            <div className="mt-6">
                                <PrimaryBtn className='hover:scale-105'>
                                    <Link to={mediaItem.link} className="">
                                        Know More
                                    </Link>
                                </PrimaryBtn>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6 space-x-4 my-4">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    className="px-4 py-2 bg-indigo-800 text-white rounded-md"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <div className="flex space-x-2">
                    {Array.from({ length: Math.ceil(media.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-indigo-800 text-white' : 'bg-white text-indigo-800 border'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    className="px-4 py-2 bg-indigo-800 text-white rounded-md"
                    disabled={currentPage === Math.ceil(media.length / itemsPerPage)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Team;
