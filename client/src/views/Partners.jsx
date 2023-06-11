import slslogo from "../assets/images/sls_logo.png";
import bertchlogo from "../assets/images/bertch_logo.png";
import ApplicationForm from "../components/ApplicationForm";

const Partners = () => {
    return (
        <div
            id="partners"
            className="mx-4 min-[400px]:mx-16 border-t border-gray-200 mt-8 mb-24 flex flex-col items-center"
        >
            <div className="py-12 flex flex-col md:flex-col items-center justify-between">
                {/* <div style={{backgroundImage: 'url(../handshake.png)'}} className="w-full md:w-1/2 mt-8 mx-auto md:mt-0 h-[250px] md:h-[315px] bg-[center_top] bg-cover" />  */}
                <div className="sponsorship w-full flex flex-col items-center">
                    <h1 className="text-3xl my-4 border-b-4 border-red-500">
                        Sponsors
                    </h1>
                    <div className="max-[450px]:w-full w-2/3 flex flex-col flex-wrap md:flex-row md:justify-center">
                        <div className="sponsor-card flex flex-col grow w-full lg:w-1/3 bg-white drop-shadow-md p-4 md: min-[450px]:m-6 hover:drop-shadow-xl hover:bg-slate-100 transition ease-in-out">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.saltlakesurgical.com/"
                            >
                                <h2 className="text-lg pl-2 flex">
                                    Salt Lake Surgical
                                    <p className="font-bebas text-lg text-gray-400">
                                        &nbsp;– Platinum
                                    </p>
                                </h2>
                                <img
                                    className="w-2/3 mx-auto py-6"
                                    src={slslogo}
                                    alt="Salt Lake Surgical"
                                />
                            </a>
                        </div>
                        <div className="sponsor-card flex flex-col grow w-full lg:w-1/3 bg-white drop-shadow-md p-4 md: min-[450px]:m-6 hover:drop-shadow-xl hover:bg-slate-100 transition ease-in-out max-md:mt-8">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.bertchassociates.com/"
                            >
                                <h2 className="text-lg pl-2 flex">
                                    Bertch Associates
                                    <p className="font-bebas text-lg text-amber-600">
                                        &nbsp;- Bronze
                                    </p>
                                </h2>
                                <img
                                    className="w-2/3 mx-auto py-6"
                                    src={bertchlogo}
                                    alt="Bertch Associates Logo"
                                />
                            </a>
                        </div>
                        {/* <div className='mb-8' /> */}
                    </div>
                </div>
                <div
                    id="partner donations"
                    className="flex flex-col items-center py-6 border-y border-gray-200 mt-8"
                >
                    <h3 className="text-xl">
                        We are grateful for the generous donations from our
                        partners:
                    </h3>
                    <div className="flex flex-col md:flex-row flex-wrap grow text-center items-center md:justify-center w-full">
                        <div className="partner-card w-full md:w-1/3 text-lg bg-white drop-shadow-md p-4 min-[450px]:m-6 mt-3">
                            <span>Darin Stettler, M.D.</span>
                        </div>
                        <div className="partner-card w-full md:w-1/3 text-lg bg-white drop-shadow-md p-4 min-[450px]:m-6 mt-6">
                            <span>Christensen and Hymas</span>
                        </div>
                        <div className="partner-card w-full md:w-1/3 text-lg bg-white drop-shadow-md p-4 min-[450px]:m-6 mt-6">
                            <span>Eisenberg Lowrance Lundell Lofgren</span>
                        </div>
                        <div className="partner-card w-full md:w-1/3 text-lg bg-white drop-shadow-md p-4 min-[450px]:m-6 mt-6">
                            <span>Brett Pearce Law</span>
                        </div>
                        <div className="partner-card w-full md:w-1/3 text-lg bg-white drop-shadow-md p-4 min-[450px]:m-6 mt-6">
                            <span>Larson Law</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/5 md:w-1/2 pb-12">
                <h1 className="text-3xl text-center my-4 border-b-4 border-red-500">
                    Become a Partner today
                </h1>
                <ApplicationForm />
            </div>
            <div
                id="contact-us"
                className="flex flex-col items-center py-6 border-t border-gray-200 "
            >
                <h3 className="text-xl">
                    For more information, please contact us at:
                </h3>
                <a
                    className="pt-6 font-bold text-xl hover:text-red-600"
                    href="tel:801-870-8313"
                >
                    801-870-8313
                </a>
                <a
                    className="font-bold text-xl hover:text-red-600"
                    href="mailto:mtnpond6@gmail.com"
                >
                    rickikegami.ipin@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Partners;
