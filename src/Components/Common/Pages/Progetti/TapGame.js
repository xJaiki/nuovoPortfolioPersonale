import React, { useState } from 'react';
import './styles.css';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-blue-purple shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-4 md:p-8 text-white">
                    <h1 className="text-2xl md:text-5xl font-extrabold mb-1 md:mb-4">{title}</h1>
                    <p className="text-sm md:text-lg mb-3 md:mb-6">{content}</p>
                    <Button color='primary' size='lg' className='py-4 text-black rounded-lg mb-4' onClick={() => window.open('https://tapgame.mariodimarino.com/')}>Gioca qui!</Button>
                    <Button color='primary' size='lg' className='py-4 text-black rounded-lg' onClick={() => window.open('https://github.com/xJaiki/Faster-Than-Green')}>GitHub</Button>
                </div>
            </div>
        </div>
    );
};

const FlippableProjectCard = ({ title, content, imageSrc, gradientClassName, className }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`card ${flipped ? 'flipped' : ''} ${className}`}
            onClick={() => setFlipped(!flipped)}>
            <div className="card-inner">
                <div className={`card-front p-5 ${gradientClassName} shadow-lg rounded-lg overflow-hidden`}>
                    <img src={imageSrc} alt={title} className="object-scale-down w-full h-full rounded-lg" />
                    <Button className='absolute bottom-2 right-2 rounded-full' size='sm' isIconOnly onClick={() => setFlipped(!flipped)} variant='faded' color='primary'>
                        <FontAwesomeIcon icon={faInfo} />
                    </Button>
                </div>
                <div className={`card-back p-5 ${gradientClassName} shadow-lg rounded-lg overflow-hidden`}>
                    <h2 className="text-md md:text-xl font-semibold mb-1 text-black">{title}</h2>
                    <p className="text-xs md:text-base text-gray-900">{content}</p>
                    <Button className='absolute bottom-2 right-2 rounded-full' size='sm' isIconOnly onClick={() => setFlipped(!flipped)} variant='faded' color='primary'>
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const TapGame = () => {
    return (
        <div className="h-screen grid grid-cols-3 grid-rows-5 gap-2 md:gap-4 py-2 md:py-4 px-10 md:grid-cols-5 md:grid-rows-5">

            {/*!SECTION Titolo */}
            <StaticProjectCard
                title="Faster Than Green"
                content="Faster Than Green è un gioco per cellulari che sfida i vostri tempi di reazione e precisione. Su una griglia 5x5 con 12 quadrati verdi casuali, l'obiettivo è toccare solo i quadrati verdi per segnare punti. Toccare un quadrato rosso sottrae 1 punto. Il gioco termina dopo 20 secondi."
                className="col-span-3 row-span-2 order-1 md:order-1 md:col-span-5 md:row-spawn-2"
            />

            {/*!SECTION Regole */}
            <div className="col-span-1 row-span-2 order-2 md:order-2 md:col-span-3 md:row-span-2">
                <div className="card-inner gradient-indigo-purple shadow-lg rounded-lg overflow-hidden">
                    <div className="card-front flex flex-col p-4 md:p-8 text-white">
                        <h1 className="text-xl md:text-5xl font-extrabold mb-1 md:mb-4">Regole</h1>
                        <ul className=" list-inside text-sm md:text-lg space-y-2">
                            <li className='border-l-2 pl-2'>Quadrato <span className='font-bold text-yellow-200'>oro</span>: +5 punti.</li>
                            <li className='border-l-2 pl-2'>Quadrato <span className='font-bold text-green-200'>verde</span>: +1 punto.</li>
                            <li className='border-l-2 pl-2'>Quadrato <span className='font-bold text-red-200'>rosso</span>: -1 punto.</li>
                            <li className='border-l-2 pl-2'>Tempo: 20 secondi.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*!SECTION Video */}
            <div className="card col-span-2 row-span-2 order-1 md:order-3 md:col-span-2 md:row-span-5">
                <div className="card w-full h-full">
                    <div className="card-inner flex justify-center bg-white p-5 rounded-lg shadow-lg overflow-hidden flex-col">
                        <video src={require('../../../../assets/ftg/video.mp4')} className="w-full h-full" autoPlay loop muted />
                    </div>
                </div>
            </div>

            {/*!SECTION Tecnologie */}
            <FlippableProjectCard
                title="HTML, CSS, JS"
                content="Prima bozza creata in puro HTML, CSS e JS"
                gradientClassName="gradient-teal-cyan"
                imageSrc={require('../../../../assets/htmlcssjs.png')}
                className="col-span-1 row-span-1 order-4 md:order-4 md:col-span-1 md:row-span-3"
            />
            <FlippableProjectCard
                title="Amore"
                content="Creato con tanto amore, e un po' di codice"
                gradientClassName="gradient-orange-yellow"
                imageSrc={require('../../../../assets/heart.png')}
                className="col-span-1 row-span-1 order-5 md:col-span-1 md:row-span-3"
            />
            <FlippableProjectCard
                title="Firebase"
                content="Leaderboard online fatto con Firebase! Anche se non funziona piu' :("
                gradientClassName="gradient-red-pink"
                imageSrc={require('../../../../assets/firebase.png')}
                className="col-span-1 row-span-1 order-6 md:col-span-1 md:row-span-3"
            />
        </div>
    );
};

export default TapGame;
