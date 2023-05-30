import { Link } from 'react-router-dom';
import slslogo from '../assets/images/sls_logo.png';
import bertchlogo from '../assets/images/bertch_logo.png';
import Partners from './Partners';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0 bg-cover bg-center animate-fadein" style={{backgroundImage: 'url(./meeting.png)'}}>
          {/* Rectangular div centered inside the image */}
          <div className="absolute inset-0 flex items-center justify-center animate-fadedown drop-shadow-lg">
            <div className="w-full sm:w-2/3 md:w-1/2 bg-white shadow-lg rounded-lg p-2 mx-2">
              {/* Top bar */}
              <div className=" bg-gradient-to-b from-black to-gray-900 text-white py-4">
                <Link to="/about/mission" className="font-bebas text-center text-md md:text-3xl animate-dropdown animate-duration-2000 flex flex-col items-center px-2">
                  Elevate your personal injury practice. <p className="font-bebas text-md md:text-2xl hover:underline text-red-500 pl-1 md:pl-4">Join Us</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center border-t my-8 border-gray-200'>
            <div id="mission-statement" className="mx-auto h-[60vh] w-4/5 md:w-1/2 flex flex-col items-center justify-center animate-fadedown">
                <h1 className='text-4xl font-sans text-red-600 py-2'>Our Mission</h1>
                <p className='text-center text-lg min-[400px]:text-xl'>
                    The Integrated Personal Injury Network mission is twofold. First, IPIN's goal is to raise funding via
                    charitable donations and grant writing to help those without the necessary financial resources to obtain
                    the healthcare they need when recovering from a personal injury accident. Second, IPIN will provide top
                    notch resources and continuing education for all professionals that work in the personal injury space.
                </p>
            </div>
            <div id="about-tabs" className="flex flex-row justify-center">
                <ul className="flex flex-row">
                    <Link
                    to={'/about'} 
                    className='px-4 py-1 font-sans outline-2 rounded-sm border-inherit mr-2 text-white bg-red-600 border-2 border-red-600 hover:underline underline-offset-4'
                    >About Us
                    </Link>
                </ul>
            </div>
        </div>
        <Partners />
    </div>
  );
}

export default Home;


