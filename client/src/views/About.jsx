import { useState, useEffect } from 'react';
import Officers from './Officers';
import Board from './Board';
import Events from './Events';
import { Link } from 'react-router-dom';

const About = ({selection}) => {
    const tabs = ['Officers', 'Board', 'Events'];
    // const tabs = ['Officers', 'Board', 'Doctors and Lawyers'];
    const [selectedTab, setTab] = useState('Officers');

    useEffect(() => {
        if(selection){
            setTab(selection);
            return;
        }
        setTab('Officers');
        return;
    }, [selection]);

    return (
        <div id="about">
            <div id="about-tabs" className="flex flex-row px-12 pt-12 pb-2">
                <ul className="flex flex-row">
                    <Link 
                    className={`px-4 py-1 font-sans outline-2 rounded-sm border-inherit mr-2 ${(selectedTab === 'Officers') ? 'text-red-500 bg-gray-100 border-2 border-red-600 underline ' : 'bg-red-600 drop-shadow-md text-stone-100'} hover:underline`} 
                    onClick={() => {setTab('Officers')}} key={'Officers'}to="/about/officers">Officers
                    </Link>
                    <Link 
                    className={`px-4 py-1 font-sans outline-2 rounded-sm border-inherit mr-2 ${(selectedTab === 'Board') ? 'text-red-500 bg-gray-100 border-2 border-red-600 underline ' : 'bg-red-600 drop-shadow-md text-stone-100'} hover:underline`} 
                    onClick={() => {setTab('Board')}} key={'Board'}to="/about/board">Board
                    </Link>
                    

                </ul>
            </div>
            {selectedTab === 'Officers' && <Officers />}
            {selectedTab === 'Board' && <Board />}
            {selectedTab === 'Events' && <Events />}
        </div>
    );
}

export default About;