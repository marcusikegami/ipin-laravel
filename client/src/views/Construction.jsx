import logo_icon from '../assets/images/logo_icon.png';
import hook from '../assets/images/hook.png';
const Construction = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div id="header" className='flex justify-center content-center p-4 border-b border-gray-200'>
                <div>
                    <img alt="IBIN logo" src={logo_icon} />
                </div>
            </div>

            <div id="construction" className='flex flex-col items-center py-20'>
                <img className="h-10" alt="construction" src={hook}/>
                <h3 className='py-4 text-xl'>Site Under Construction</h3>
                <h1 className='py-4 text-4xl font-bold text-center'>IPIN IS COMING ONLINE SOON</h1>
                <div id='contact-us' className='flex flex-col items-center py-4'>
                    <h3 className='text-xl'>For more information, please contact us at:</h3>
                    <a className='pt-8 font-bold text-2xl hover:text-red-600' href='tel:801-870-8313'>801-870-8313</a>
                    <a className='font-bold text-2xl hover:text-red-600' href='mailto:mtnpond6@gmail.com'>mtnpond6@gmail.com</a>
                </div>
            </div>
            <div id="footer" className='h-6 bg-red-600 absolute inset-x-0 bottom-0' >
            <a className="text-xs text-red-300" href="https://www.flaticon.com/free-icons/construction" title="construction icons">Construction icons created by Pause08 - Flaticon</a>
            </div>
        </div>
    );
};

export default Construction;