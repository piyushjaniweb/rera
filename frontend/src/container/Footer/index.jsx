import React, { useState } from "react";
import { Container } from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useFormik } from "formik";
import localpulse from '../../assets/footer/black-logo.png'


const quickLinks = [
  {
    id: 1,
    label: "Quick Links",
    slug: "quick-links",
    links: [
      { id: 1, label: "About Us", slug: "about-us" },
      { id: 2, label: "Blogs", slug: "blogs" },
      { id: 3, label: "Contact Us", slug: "contact-us" },
      { id: 4, label: "Media", slug: "media" },
      { id: 5, label: "Careers", slug: "careers" },
    ],
  },
  {
    id: 2,
    label: "Solutions",
    slug: "solutions",
    links: [
      { id: 1, label: "pharmconnect", slug: "pharmconnect" },
      { id: 2, label: "pharmretail", slug: "pharmretail" },
      { id: 3, label: "pharmanalytics", slug: "pharmanalytics" },
      { id: 4, label: "publichealth", slug: "publichealth" },
    ],
  },
  {
    id: 3,
    label: "Contact Us",
    slug: "contact-us",
    links: [
      { id: 1, label: "pharmconnect", slug: "pharmconnect" },
      { id: 2, label: "pharmretail", slug: "pharmretail" },
      { id: 3, label: "pharmanalytics", slug: "pharmanalytics" },
      { id: 4, label: "publichealth", slug: "publichealth" },
    ],
  },
  {
    id: 4,
    label: "FAQs",
    slug: "contact-us",
    links: [
      { id: 1, label: "pharmconnect", slug: "pharmconnect" },
      { id: 2, label: "pharmretail", slug: "pharmretail" },
      { id: 3, label: "pharmanalytics", slug: "pharmanalytics" },
      { id: 4, label: "publichealth", slug: "publichealth" },
    ],
  },
];

const Footer = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log("Submitted email:", values.email);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const socialLinks = [
    {
      id: 1,
      label: "Facebook",
      icon: <FaFacebookF />,
      url: "",
    },
    {
      id: 2,
      label: "Instagram",
      icon: <FaInstagram />,
      url: "",
    },
  ];

  return (
    <footer className="bg-black backdrop-blur-lg font-helvetica">
      <Container className="py-14">
        <div className="grid md:grid-cols-[repeat(6,1fr)] md:grid-rows-none lg:grid-cols-[repeat(7,1fr)] lg:grid-rows-none gap-6 sm:gap-10 pb-20 md:gap-6">
          <div className="md:row-1 md:col-span-2 xs:col-span-1 w-60">
            <img
              src={localpulse}
              alt="Localpulse"
              className="w-52 h-auto pb-8"
            />
            <h4 className="text-lg text-white font-bold">Our Offices:</h4>
            <p className="text-gray-300 text-[17px] leading-7 pt-4">
              Pune: Pharmarack Technologies Private Limited: Office No. 301 To 304, 3rd Floor, Pride Portal, Bahiratwadi, Shivajinagar, Bhamburda, Pune – 411 016
            </p>
            <p className="text-gray-300 text-[17px] leading-7 pt-4">
              Mumbai: B Wing, Silver Utopia, Unit 201, Cardinal Gracious Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099
            </p>


          </div>

          <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:w-96 lg:px-8">
            <div className="flex-1 w-1/2">
              <h4 className="text-lg font-semibold py-2 text-white md:pt-0">Quick Links</h4>
              <ul>
                {quickLinks[0]?.links?.map((childItem) => (
                  <li
                    onClick={() => {
                      navigate(childItem?.slug);
                    }}
                    key={childItem?.id}
                    className="py-2 text-gray-300 hover:text-white cursor-pointer flex items-center underline-footer"
                  >
                    {childItem?.icon && (
                      <span className="mr-2">
                        {childItem.icon}
                      </span>
                    )}
                    {childItem?.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-1/2">
              <h4 className="text-lg font-semibold py-2 text-white md:pt-0">Solutions</h4>
              <ul>
                {quickLinks[1]?.links?.map((childItem) => (
                  <li
                    onClick={() => {
                      navigate(childItem?.slug);
                    }}
                    key={childItem?.id}
                    className="py-2 text-gray-300 hover:text-white cursor-pointer flex items-center"
                  >
                    {childItem?.icon && (
                      <span className="mr-2">
                        {childItem.icon}
                      </span>
                    )}
                    {childItem?.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:w-96 ">
            <div className="flex-1 w-1/2">
              <h4 className="text-lg font-semibold py-2 text-white md:pt-0">Contact Us</h4>
              <ul>
                {quickLinks[2]?.links?.map((childItem) => (
                  <li
                    onClick={() => {
                      navigate(childItem?.slug);
                    }}
                    key={childItem?.id}
                    className="py-2 text-gray-300 hover:text-white cursor-pointer flex items-center"
                  >
                    {childItem?.icon && (
                      <span className="mr-2">
                        {childItem.icon}
                      </span>
                    )}
                    {childItem?.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-1/2">
              <h4 className="text-lg font-semibold py-2 text-white md:pt-0">FAQs</h4>
              <ul>
                {quickLinks[3]?.links?.map((childItem) => (
                  <li
                    onClick={() => {
                      navigate(childItem?.slug);
                    }}
                    key={childItem?.id}
                    className="py-2 text-gray-300 hover:text-white cursor-pointer flex items-center"
                  >
                    {childItem?.icon && (
                      <span className="mr-2">
                        {childItem.icon}
                      </span>
                    )}
                    {childItem?.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="md:row-2 md:col-3">
            <h4 className="text-lg text-white font-bold">Get in touch</h4>
            <span className="py-4 text-gray-300 hover:text-white cursor-pointer flex items-center">enquire@pharmarack.com</span>

            <div className="py-4">
              <ul className="flex justify-start gap-4">
                {socialLinks?.map((item) => (
                  <li
                    key={item?.id}
                    className="p-2 rounded-lg bg-primary hover:bg-darkprimary cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
                  >
                    <a href={item?.url} target="_blank" rel="noopener noreferrer">
                      <div className="text-xl text-white">{item?.icon}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h4 className="text-lg text-white font-bold">Join our newsletter</h4>
            <form onSubmit={handleSubmit} className="flex items-center my-4 flex-col space-y-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
                className="text-black bg-white w-full border-1 h-10 flex-grow pl-4 py-6 px-4 border-gray-300 rounded-md focus:ring-0 focus:border-gray-500"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-3xl hover:bg-darkprimary cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid text-white gap-4 sm:flex sm:justify-between justify-center border-t border-t-gray-500 pt-10">
          <h5>&copy; Copyright @ 2025 All Rights Reserved</h5>

          <div className="sm:flex sm:justify-end gap-8 space-x-12">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
