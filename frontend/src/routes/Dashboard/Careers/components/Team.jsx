import React, { useState } from 'react';
import { H2, H3 } from '../../../../components/Typography';

const Team = () => {
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
        // Perform form submission logic here, e.g., send data to an API
        console.log(formData);
    };

    return (
        <div className="lg:h-[750px] bg-white flex justify-center items-center font-helvetica">
            <div className="lg:h-[650px] bg-[#ebecef] w-[330px] lg:w-[1200px] rounded-3xl flex flex-col items-center my-8 py-8">
                <div className="px-4 w-full py-10 flex flex-col items-center">
                    <H2 className='!text-2xl'>Want to join our team?</H2>
                    <H3 className='!text-slate-600 py-4 lg:!mx-[350px] text-center !text-base'>
                        Drop in your resume.
                    </H3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 w-72 lg:w-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>

                    <div>
                        <label className="block font-medium py-2">Select your position</label>
                        <select
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded bg-white"
                        >
                            <option value="">Select</option>
                            <option value="Sales & Marketing">Sales & Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Data">Data</option>
                            <option value="Technology">Technology</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium py-2">Upload your resume</label>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="p-2 bg-gray-200 border rounded cursor-pointer"
                                onClick={() => document.getElementById('resumeInput').click()}
                            >
                                Choose File
                            </button>
                            <span>{formData.resume ? formData.resume.name : "No file chosen"}</span>

                            {/* Invisible file input */}
                            <input
                                id="resumeInput"
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx" // Optional: restrict to certain file types
                                onChange={handleChange}
                            />
                        </div>
                        {resumeError && <p className="text-red-500 text-sm">{resumeError}</p>}
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
    );
};

export default Team;
