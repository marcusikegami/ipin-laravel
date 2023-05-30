import logo_icon from '../assets/images/logo_icon.png';
import hamburger from '../assets/images/hamburger.svg';
import AboutDropdown from './AboutDropdown';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    //  This function grabs the pathname from the URL and stores it in a variable. It will be used to conditionally render the navlinks.
    const location = useLocation().pathname;

    // These two functions control the open/closed state of the navlinks rendered when hovering on the above navlink.
    const [open, setOpen] = useState(false);

    const handleMenuToggle = () => {
        setOpen(!open);
    };

    return (
        <div id='header-wrapper'>
            <div id="header" className='flex flex-col sm:flex-row justify-between content-center px-2 md:px-8 py-4'>
                <div className='flex flex-row items-center'>
                    <a href='/' className='border-r-2 border-red-600 pr-4 sm:pr-8'>
                        <img alt="IBIN logo" src={logo_icon} className="h-14 sm:w-20 w-14 sm:h-20 md:w-22 md:h-22"/>
                    </a>
                    <a href='/'>
                        <h1 className='max-[443px]:pl-4 pl-8 text-md md:text-2xl font-bebas text-red-600 drop-shadow-md'>Integrated Personal Injury Network</h1>
                    </a>
                </div>
                <div id="navigation-wrapper" className='flex flex-col justify-center items-end'>
                    {/* <div id="searchbar" className='p-1'>
                        <input type="text" placeholder="Search" className='outline rounded-sm px-1 py-0.5 w-40' />
                    </div> */}
                    <div id="navigation" className='flex flex-row items-center p-2 md:pr-12'>
                        <Link className='underline underline-offset-4 hover:no-underline hover:text-red-600 drop-shadow-md hover:drop-shadow-none font-bebas text-md text-red-600 pl-6' to="/">Home</Link>
                        {location !== "/contact" &&
                        <Link className='underline underline-offset-4 hover:no-underline hover:text-red-600 drop-shadow-md hover:drop-shadow-none font-bebas text-md text-red-600 pl-6' to="/contact">Contact</Link>
                        }
                        <p className='underline underline-offset-4 hover:no-underline hover:text-red-600 drop-shadow-md hover:drop-shadow-none flex flex-row items-center font-bebas text-md text-red-600 pl-6' onClick={handleMenuToggle}>About</p>
                    </div>
                    <a className='text-xl text-red-600 hover:underline py-1 px-3 md:mr-12 border-2 border-red-600 rounded-md' href='tel:801-870-8313'>Call 801-870-8313</a>
                </div>    
            </div>
            <div id='dropdown-wrapper' className='w-full bg-gray-100 animate-fadedown' onMouseLeave={handleMenuToggle}>
            { open &&
                <AboutDropdown />
            }
            </div>
        </div>        
    );
};

export default Header;