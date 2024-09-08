import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation} from "react-router-dom";

export const HT_MainNavBar = ({ titletabname, texttabcolor, titletabcolor, tabicon, cicon, tabdata }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const isDarkMode = document.documentElement.classList.toggle("dark");
        localStorage.setItem("darkMode", isDarkMode);
    }

    const [open, setOpen] = useState(false);

    const isActive = (path) => location.pathname === path 
        ? 'text-light-main-stfont hover:text-light-main-stfont font-semibold border-solid border-b-2 border-[#06b6d4] transition-all'
        : 'text-light-second-rdfont dark:text-white hover:text-light-main-stfont dark:hover:text-light-main-stfont hover:border-b-2 border-[#06b6d4] transition-transform hover:cursor-pointer';

    
    const toHTMain = () => {navigate("/");}
    const toHTServices = () => {navigate("/services");}
    const toHTAbout = () => {navigate("/about");}
    const toHTCareers = () => {navigate("/careers");}
    const toHTDevices = () => {navigate("/devices");}

    return (
        <div className="">
            <header className="navbar flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
                <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto" aria-label="Global">
                    <div className="md:col-span-3">
                        <a className="flex-none rounded-xl text-3xl  inline-block font-bold focus:outline-none focus:opacity-80
                                    bg-clip-text text-transparent bg-gradient-to-r from-light-main-stfont to-light-main-ndbg"
                            onClick={toHTMain} aria-label="HT">HT-CUIDS
                        </a>
                    </div>

                    <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl  disabled:opacity-50 disabled:pointer-events-none
                                                        border border-gray-200 text-light-main-stfont hover:bg-gray-100
                                                        dark:border-gray-800 dark:hover:bg-dark-main-stfonthover">
                            <i className='fas fa-user-circle'></i>
                            Log in
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm md:text-sm font-medium rounded-xl  transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none
                                                        border border-transparent bg-light-main-stfont text-white hover:bg-light-main-stfonthover
                                                        ">
                            Sign up
                        </button>
                        <label className="swap swap-rotate py-2 px-2 gap-x-2 rounded-xl disabled:opacity-50 disabled:pointer-events-none
                                    border border-gray-200  text-light-main-stfont  hover:bg-gray-100
                                    dark:border-gray-800 dark:hover:bg-dark-main-stfonthover">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="hidden" onClick={toggleTheme}/>

                            {/* sun icon */}
                            <svg className="swap-off h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg className="swap-on h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        

                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-bold rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" 
                                    data-hs-collapse="#navbar-collapse-with-animation" 
                                    aria-controls="navbar-collapse-with-animation" 
                                    aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 font-semibold md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                            <div>
                                <a onClick={toHTServices}
                                    className={`inline-block ${isActive('/services')}`} >Services
                                </a>
                            </div>
                            <div>
                                <a onClick={toHTAbout}
                                    className={`inline-block ${isActive('/about')}`}>About</a>
                            </div>
                            <div>
                                <a onClick={toHTCareers}
                                    className={`inline-block ${isActive('/careers')}`}>Careers</a>
                            </div>
                            <div>
                                <a onClick={toHTDevices}
                                    className={`inline-block ${isActive('/devices')}`}>Devices</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
};


