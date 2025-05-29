import React from 'react';
import { H2, H3 } from '../../../../components/Typography';
import { enhanceimg } from '../../../../assets';
import { convenience } from '../../../../db';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Map = () => {
    return (
        <div className="px-4 lg:h-[500px] bg-white items-center flex justify-center font-helvetica">
            <div className="lg:h-[400px] bg-[#ebecef] w-[330px] lg:w-[1200px] rounded-3xl flex flex-col lg:flex-row py-8">
                <div className='lg:w-1/2 flex flex-col items-center lg:mx-20 mx-2'>
                    <p className='font-bold'>Pune</p>
                    <Link to='https://www.google.com/maps?q=Pharmarack+Technologies+Private+Limited:+Office+No.+301+To+304,+3rd+Floor,+Pride+Portal,+Bahiratwadi,+Shivajinagar,+Bhamburda,+Pune+–+411+016'>
                        <p className='font-bold text-primary my-4 text-center'>
                            Pharmarack Technologies Private Limited: Office No. 301 To 304, 3rd Floor, Pride Portal, Bahiratwadi, Shivajinagar, Bhamburda, Pune – 411 016
                        </p>
                    </Link>

                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=Pharmarack+Technologies+Private+Limited:+Office+No.+301+To+304,+3rd+Floor,+Pride+Portal,+Bahiratwadi,+Shivajinagar,+Bhamburda,+Pune+–+411+016&key=YOUR_GOOGLE_MAPS_API_KEY"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className='lg:w-1/2 flex flex-col items-center lg:mx-20 mx-4'>
                    <p className='font-bold'>Mumbai</p>
                    <Link to='https://www.google.com/maps?q=B+Wing,+Silver+Utopia,+Unit+201,+Cardinal+Gracious+Rd,+Chakala,+Andheri+East,+Mumbai,+Maharashtra+400099'>
                        <p className='font-bold text-primary my-4 text-center'>
                            B Wing, Silver Utopia, Unit 201, Cardinal Gracious Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099
                        </p>
                    </Link>

                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=B+Wing,+Silver+Utopia,+Unit+201,+Cardinal+Gracious+Rd,+Chakala,+Andheri+East,+Mumbai,+Maharashtra+400099&key=YOUR_GOOGLE_MAPS_API_KEY"
                        width="100%"
                        height="300"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
