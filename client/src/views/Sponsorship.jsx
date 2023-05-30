
const Sponsorship = () => {
    return (
        <div id="sponsorship" className="mx-16 border-t border-gray-200 mt-8 mb-24">
            <div id="column-wrapper" className="flex flex-row justify-center py-12 border-b border-gray-200 w-full">
                <div className="w-1/3 max-md:w-full">
                    <div className="flex flex-col items-start w-3/5">
                        <h1 className="text-2xl py-4">Corporate Sponsorship</h1>
                        <h2 className="text-lg text-red-600">Levels:</h2>
                        <div className="membership">
                            <h2 className="text-lg pl-2">Platinum: $25,000</h2>
                        </div>
                        <div className="membership">
                            <h2 className="text-lg pl-2">Gold: $10,000</h2>
                        </div>
                        <div className="membership">
                            <h2 className="text-lg pl-2">Silver: $5,000</h2>
                        </div>
                        <div className="membership">
                            <h2 className="text-lg pl-2">Bronze: $2,500</h2>
                            {/* <ul className="pl-4">
                                <li>- Booth at spring/fall seminar only</li>
                                <li>- IPIN Contact list</li>
                                <li>- Access to four meetings</li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-3/5 pt-12">
                        <h1 className="text-2xl py-4">Website Banners</h1>
                        <div className="membership">
                            <h2 className="text-lg">- Homepage Banner: $4,000</h2>
                        </div>
                        <div className="membership ">
                            <h2 className="text-lg">- On any other page: $2,000</h2>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-3/5 pt-12">
                        <h1 className="text-2xl py-4">Donations</h1>
                        <div className="membership">
                            <h2 className="text-lg">All donations are accepted and appreciated</h2>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(../downtown.png)'}} className="w-1/2 h-[600px] bg-fill bg-no-repeat bg-center hidden md:flex" />
            </div>
            <div id='contact-us' className='flex flex-col items-center py-6  '>
                <h3 className='text-xl'>For more information, please contact us at:</h3>
                <a className='pt-6 font-bold text-xl hover:text-red-600' href='tel:801-870-8313'>801-870-8313</a>
                <a className='font-bold text-xl hover:text-red-600' href='mailto:mtnpond6@gmail.com'>rickikegami.ipin@gmail.com</a>
            </div>
        </div>
    );
};

export default Sponsorship;