import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/navbar/rera.webp";
import Profiles from "./Profiles";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { navMenu } from "../../db";
import { FaCalendarAlt,FaPhone } from "react-icons/fa";


import { PrimaryBtn } from "../../components/Button";

export default function NavbarContent(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [expandedItem, setExpandedItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuToggle = (name) => {
        setExpandedItem(expandedItem === name ? null : name);
    };

    const handleDropdownToggle = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const handleSubmenuClose = () => {
        setExpandedItem(null);
        setActiveDropdown(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const topHeader = document.querySelector('.top-header');
            const topHeaderHeight = topHeader?.offsetHeight || 0;

            if (window.scrollY > topHeaderHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="">
            {/* Top header section */}
            {/* <div className="w-full border-b-[1px] border-solid border-gray-200">
                <div className="bg-white max-w-screen-lg lg:max-w-screen-xl mx-auto xl:px-0 lg:px-8">
                    <div className="flex flex-col xs:justify-center xs:items-center lg:flex-row justify-between items-center">
                        <div className="w-full lg:w-4/5 xl:w-4/5 lg:pl-72">
                            <p className="text-primary text-center lg:text-left pt-2 lg:pt-0">India’s first 360&deg; solution provider for News Reporters & Content Creators </p>
                        </div>

                        <div className="w-full lg:w-1/5 xl:w-1/5 flex justify-center pl-16 py-4 lg:py-0 pr-16 lg:pr-0">
                            <Profiles className="profile bg-transparent border border-white text-primary hover:text-darkprimary" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main navbar section */}
            <div
                style={{ zIndex: 50 }}
                className={`bg-white w-full z-50 transition-all duration-300 border-b-[1px] ${isScrolled ? 'fixed top-0' : 'relative'} border-solid border-gray-200`}>
                <div className="gap-4 sm:px-5 px-3 relative flex border-gray-200 bg-white max-w-screen-lg lg:max-w-screen-xl mx-auto xl:px-0 lg:px-8 py-4 lg:py-0">
                    {/* Logo section */}
                    <div className="flex items-center justify-start z-10">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                alt="GG Localpulse"
                                className="h-10 w-36 sm:w-52 md:w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation and actions section */}
                    <div className="flex items-center ml-auto justify-end space-x-4 ">
                        {/* Desktop navigation links */}
                        {/* <ul className="hidden lg:flex lg:flex-row items-center lg:space-x-2">
                            {navMenu.map((item, index) => (
                                <li key={item.id} className=" relative flex items-center group lg:text-lg underline-hover " onMouseEnter={() => item?.submenu && setActiveDropdown(index)}
                                    onMouseLeave={() => item?.submenu && setActiveDropdown(null)}>
                                    <Link
                                        to={item.slug}
                                        draggable="false"
                                        onClick={() => {
                                            if (item.submenu) {
                                                handleDropdownToggle(index);
                                            } else {
                                                navigate(item.slug);
                                            }
                                        }}
                                        onMouseEnter={() => item?.submenu && setActiveDropdown(index)}
                                        onMouseLeave={() => item?.submenu && setActiveDropdown(null)}
                                        className={`-px-2 text-base flex items-center text-black hover:text-primary transition-colors duration-300 h-18`}
                                    >
                                        <span
                                            className={`mr-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                        ></span>
                                        {item.label}
                                        {item.submenu && (
                                            <span className="ml-2 pt-2">
                                                <span className="inline-block group-hover:hidden">
                                                    <FaAngleDown />
                                                </span>
                                                <span className="hidden group-hover:inline-block">
                                                    <FaAngleUp />
                                                </span>
                                            </span>
                                        )}
                                    </Link>

                                    {item.submenu && activeDropdown === index && (
                                        <div
                                            className="absolute left-0 mt-72 w-48 bg-white shadow-lg z-10 block border-[1px] border-gray-200"
                                            onMouseEnter={() => setActiveDropdown(index)} 
                                            onMouseLeave={() => setActiveDropdown(null)} 
                                        >
                                            <ul className="space-y-2">
                                                {item.submenu.map((dropdownItem) => (
                                                    <li key={dropdownItem.id}>
                                                        <Link
                                                            draggable="false"
                                                            to={dropdownItem.slug} 
                                                            onClick={handleSubmenuClose}
                                                            className="text-base block px-6 py-3 text-black hover:bg-blue-100 transition-colors duration-300"
                                                        >
                                                            {dropdownItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul> */}


                        {/* Search icon */}
                        {/* <div className="text-black cursor-pointer hover:text-primary">
                            <CiSearch size={24} className="font-light" />
                        </div> */}

                        <PrimaryBtn
                            className="my-4 gap-2"
                            onClick={() => navigate('/')}
                        >
    <FaPhone className="rotate-90" /> Call Now
                        </PrimaryBtn>
                        <PrimaryBtn
                            className="my-4 gap-2"
                            onClick={() => navigate('/')}
                        >
                            <FaCalendarAlt className="" /> Site Visit Booking
                        </PrimaryBtn>

                        {/* Mobile menu toggle button */}
                        <div className="lg:hidden flex items-center justify-end xs:pl-12 lg:pl-0 md:items-right lg:ml-0 md:justify-right order-2">
                            <span
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-black bg-transparent text-3xl lg:text-6xl"
                            >
                                {menuOpen ? <IoMdClose /> : <IoMdMenu />}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div
                        className={`xl:hidden menu-scrollable  bg-white w-[100vw] flex flex-col items-center transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        style={{
                            overflowY: 'auto',
                            maxHeight: '92vh',
                        }}
                    >
                        {navMenu.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex flex-col items-start w-screen justify-center border-b border-gray-200 py-4"
                            >
                                <div className="flex items-center w-screen">
                                    <Link
                                        draggable="false"
                                        to={item.slug}
                                        onClick={handleSubmenuClose}
                                        className={`text-black text-xl py-2 px-4 transition-colors duration-300 flex justify-start items-center ${location.pathname === item.slug ? 'text-black' : ''
                                            }`}
                                    >
                                        {item.label}
                                    </Link>

                                    {/* Dropdown toggle for mobile */}
                                    {item.submenu && (
                                        <div
                                            className="ml-auto font-bold text-4xl mr-8 text-black cursor-pointer"
                                            onClick={() => handleMenuToggle(item.id)}
                                        >
                                            {expandedItem === item.id ? '-' : '+'}
                                        </div>
                                    )}
                                </div>

                                {/* Dropdown items for mobile */}
                                {item.submenu && expandedItem === item.id && (
                                    <div className="w-screen bg-white text-black mt-4">
                                        <ul className="space-y-2">
                                            {item.submenu.map((dropdownItem) => (
                                                <li key={dropdownItem.id}>
                                                    <Link
                                                        draggable="false"
                                                        to={dropdownItem.links}
                                                        onClick={handleSubmenuClose}
                                                        className="block border-t text-xl border-gray-200 px-10 py-2 pt-4 pb-4 text-black hover:bg-blue-100 transition-colors duration-300"
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}