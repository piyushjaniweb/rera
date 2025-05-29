import React from 'react'
import { H2, H3 } from '../../../../components/Typography'
import { enhanceimg } from '../../../../assets';
import { convenience } from '../../../../db';
import { useState } from 'react';
import phone from '../../../../assets/phone.png'
import mail from '../../../../assets/mail.png'

const Enhance = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        resume: null,
        message: ""
    });

    const [resumeError, setResumeError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            if (files.length === 0) {
                setResumeError("No file chosen");
                setFormData({ ...formData, resume: null });
            } else {
                setResumeError("");
                setFormData({ ...formData, resume: files[0] });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="mt-8 px-4 lg:h-[600px] bg-white flex justify-center items-center font-helvetica">
            <div className=" lg:h-[500px] bg-[#ebecef] w-[330px] lg:w-[1200px] rounded-3xl flex flex-col lg:flex-row items-center">

                <div className='w-auto lg:w-2/5 flex flex-col items-start justify-start my-4 lg:my-0 mx-8 lg:mx-20'>
                    <div className='flex my-4 items-center lg:items-start'>
                        <div className='bg-white w-14 h-14 flex items-center justify-center rounded-lg hover:bg-primary'>
                            <img src={phone} alt="" className='w-10 h-10' />
                        </div>
                        <div className='ml-4 flex flex-col justify-center items-start text-left'>
                            <p className='font-semibold'>Call Us</p>
                            <p className='text-gray-500'>Get instant assistance.</p>
                        </div>
                    </div>

                    <div className='flex my-4 items-start'>
                    <div className='bg-white w-24 lg:w-14 h-14 flex items-center justify-center rounded-lg hover:bg-primary'>
                            <img src={mail} alt="" className='w-10 h-10' />
                        </div>
                        <div className='ml-4 flex flex-col justify-center items-start text-left'>
                            <p className='font-semibold'>Email Us</p>
                            <p className='text-gray-500'>Let us know how we can serve you better.</p>
                        </div>
                    </div>
                </div>

                <div className='w-[270px] lg:w-3/5 lg:m-4 my-4 lg:my-0'>
                    <div className="w-full flex flex-col items-start">
                        <H2 className='!text-2xl'>How can we assist you today?</H2>
                        <H3 className='!text-slate-600 py-4 text-left !text-base'>
                            Share your coordinates with us and our team will get in touch with you.
                        </H3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full p-2 rounded bg-white"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full p-2 rounded bg-white"
                            />
                            <div>
                                <select
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 rounded bg-white"
                                >
                                    <option value="">Select</option>
                                    <option value="Sales & Marketing">pharmconnect</option>
                                    <option value="Finance">pharmretail</option>
                                    <option value="Data">pharmanalytics</option>
                                    <option value="Technology">publichealth</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Message"
                                className="w-full p-2 rounded bg-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Enhance