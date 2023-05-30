import { Link } from 'react-router-dom';

const Mission = () => {
    return (
        <div className='mb-16 flex flex-col items-center'>
            <div id="mission-statement" className="mx-auto h-[80vh] w-4/5 md:w-1/2 flex flex-col items-center justify-center animate-fadedown">
                <h1 className='text-4xl font-sans text-red-600 py-2'>Our Mission</h1>
                <p className='text-center text-lg min-[400px]:text-xl'>
                    The Integrated Personal Injury Network mission is twofold. First, IPIN's goal is to raise funding via
                    charitable donations and grant writing to help those without the necessary financial resources to obtain
                    the healthcare they need when recovering from a personal injury accident. Second, IPIN will provide top
                    notch resources and continuing education for all professionals that work in the personal injury space.
                </p>
            </div>
            <div id="about-tabs" className="flex flex-row px-12 pt-12 pb-2 justify-center border-gray-100 border-t-2 w-2/3">
                <ul className="flex flex-row">
                    <Link
                    to={'/about'} 
                    className='px-4 py-1 font-sans outline-2 rounded-sm border-inherit mr-2 text-white bg-red-500 border-2 border-red-600 hover:underline underline-offset-4'
                    >About Us
                    </Link>
                </ul>
            </div>
        </div>
    )
};

export default Mission;