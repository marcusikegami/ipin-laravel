import { Link, useLocation } from 'react-router-dom';


const Footer = () => {
    const location = useLocation().pathname;

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (
        <div id="footer" className={`md:fixed bottom-0 w-full max-w-[1640px] bg-red-600  px-2 md:px-6 py-2 lg:py-0 ${location === '/' ? 'mt-0' : 'mt-10'} border-b border-gray-200`}>
            <div id="navigation-wrapper" className='flex flex-col justify-center items-start'>
                <div id="navigation" className='p-2 flex justify-center'>
                    <div>
                        <Link className='text-lg text-gray-100 hover:underline hover:underline-offset-4' onClick={scrolltoTop} to="/partnerships/sponsorship">Sponsorship</Link>
                        <Link className='text-lg text-gray-100 max-[400px]:pl-4 pl-6 hover:underline hover:underline-offset-4' onClick={scrolltoTop} to="/partnerships/partners">Partners</Link>
                        <Link className='text-lg text-gray-100 max-[400px]:pl-4 pl-6 hover:underline hover:underline-offset-4' onClick={scrolltoTop} to="/about/events">Events</Link>
                        <Link className='text-lg text-gray-100 max-[400px]:pl-4 pl-6 hover:underline hover:underline-offset-4' onClick={scrolltoTop} to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;