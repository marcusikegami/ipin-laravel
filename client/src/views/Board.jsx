import Jeremy from "../assets/images/headshots/Jeremy.jpg";
import Justin from "../assets/images/headshots/Justin.jpg";
import Ormond from "../assets/images/headshots/Ormond.jpg";
import Ikegami from "../assets/images/headshots/Ikegami.jpg";
import Remes from "../assets/images/headshots/Remes.jfif";
import Scholl from "../assets/images/headshots/Scholl.jfif";
import Hymas from "../assets/images/headshots/Hymas.jpg";
import Brewster from "../assets/images/headshots/Brewster.jpg";

const Board = () => {
  return (
    <div
      id="board-members"
      className="mx-4 md:mb-32 sm:mx-16 border-t border-gray-200"
    >
      <div id="board-body" className="px-4">
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Ikegami}
            alt="Headshot of Rick Ikegami"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Rick H. Ikegami, MBA
            </h2>
            <h3 className="font-abel text-md">Founder and President</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Remes}
            alt="Headshot of "
          />
          <div className="headshot-placeholder w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"></div>
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Joseph Remes, Board Chairman
            </h2>
            <h3 className="font-abel text-md">Injury Analysis Group</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Ormond}
            alt="Headshot of Mark Ormond"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Mark Ormond, Vice Chairman
            </h2>
            <h3 className="font-abel text-md">Patient LienQ – Founder</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Justin}
            alt="Headshot of Justin Hosman"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Justin Hosman, Esq.
            </h2>
            <h3 className="font-abel text-md">Steele Adams Hosman</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Brewster}
            alt="Headshot of James Brewster"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              James Brewster, MD
            </h2>
            <h3 className="font-abel text-md">Orthopedic Physician</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Scholl}
            alt="Headshot of "
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Mark Scholl, MD
            </h2>
            <h3 className="font-abel text-md">Heiden Orthopedics</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          {/* <img className='w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4' src={} alt="Headshot of " /> */}
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Gary Lee, DC
            </h2>
            <h3 className="font-abel text-md">Modern Health U</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Hymas}
            alt="Headshot of Russ Hymas"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Russ Hymas, Esq.
            </h2>
            <h3 className="font-abel text-md">Christensen and Hymas</h3>
          </div>
        </div>
        <div className="py-4 flex flex-col items-center mt-8">
          <img
            className="w-[90%] min-[400px]:w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-auto min-[400px]:h-[50%] sm:h-[40%] md:h-[30%] lg:h-[25%] mb-4 sm:mb-0 sm:mt-2 sm:mr-4"
            src={Jeremy}
            alt="Headshot of Jeremy Joyal"
          />
          <div className="board-member py-4 text-center border-b border-gray-300 w-1/2">
            <h2 className="text-xl pb-2 text-red-600 underline underline-offset-4 drop-shadow-md">
              Jeremy Joyal, MD
            </h2>
            <h3 className="font-abel text-md">Advanced Spine and Pain</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
