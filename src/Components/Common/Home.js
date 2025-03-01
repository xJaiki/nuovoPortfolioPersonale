import React, { useEffect, useRef, useState } from 'react';
import Land from './Pages/Land';
import Progetto2 from './Pages/Progetto2';
import TapGame from './Pages/Progetti/TapGame';
import LTMS from './Pages/Progetti/LTMS';
import TREEMMEESSE from './Pages/Progetti/TREEMMEESSE';
import Miscs from './Pages/Progetti/Miscs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const horizontalScrollRef = useRef(null);
    const verticalScrollRef = useRef(null);

    const scrollLeft = () => {
        if (horizontalScrollRef.current) {
            horizontalScrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (horizontalScrollRef.current) {
            horizontalScrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    const scrollTop = () => {
        if (verticalScrollRef.current) {
            verticalScrollRef.current.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }
    }
    
    const scrollBottom = () => {
        if (verticalScrollRef.current) {
            verticalScrollRef.current.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    }

    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
            <div className="snap-always snap-center h-screen flex-shrink-0" id="page10">
                <Land />
            </div>
            <div className="snap-always snap-center h-screen flex-shrink-0 relative" id="page20">
                <div ref={horizontalScrollRef} className="h-100 w-full overflow-x-scroll snap-x snap-mandatory flex">
                    <div className="snap-center flex-shrink-0 w-screen h-screen" id="page21">
                        <TapGame />
                    </div>
                    <div className="snap-center flex-shrink-0 w-screen h-screen" id="page22">
                        <LTMS />
                    </div>
                    <div className="snap-center flex-shrink-0 w-screen h-screen" id="page23">
                        <TREEMMEESSE />
                    </div>
                    <div className="snap-center flex-shrink-0 w-screen h-screen" id="page24">
                        <Miscs />
                    </div> 
                </div>
                <button 
                    onClick={scrollLeft} 
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white p-2 rounded chevron" style={{height: '100vh'}}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                <button 
                    onClick={scrollRight} 
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-2 rounded chevron"  style={{height: '100vh'}}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
            </div>
            <div className="snap-always snap-center h-screen flex-shrink-0" id="page30">
                <Progetto2 />
            </div>
        </div>
    );
};

export default Home;
