import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const AboutDropdown = () => {
    //  This function grabs the pathname from the URL and stores it in a variable. It will be used to conditionally render the mission navlink if the user is already on the mission page.
    const location = useLocation().pathname;
    return (
        <ul className="flex flex-col items-end pr-12 py-4 br-2 border-b-2 animate-dropdown">
            {location !== '/about/mission' &&
                <li className="p-2 border-r-2 border-red-400">
                    <Link   to='/about/mission' className='font-sans text-md text-red-600 pl-6 hover:underline underline-offset-4 drop-shadow-md'>Our Mission</Link>               
                </li>
            }
            {location !== "/about/officers" &&
                <li className="p-2 border-r-2 border-red-400">
                    <Link   to='/about/officers' className='font-sans text-md text-red-600 pl-6 hover:underline underline-offset-4 drop-shadow-md'>Meet the Officers</Link>              
                </li>
            }
            {location !== "/about/board" &&
                <li className="p-2 border-r-2 border-red-400">
                    <Link   to='/about/board' className='font-sans text-md text-red-600 pl-6 hover:underline underline-offset-4 drop-shadow-md'>Meet the Board</Link>
                </li>
            }
        </ul>
    )
};

export default AboutDropdown;