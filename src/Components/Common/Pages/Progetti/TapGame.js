import React, { useState } from 'react';
import './styles.css';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-blue-purple shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-8 text-white">
                    <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
                    <p className="text-lg mb-6">{content}</p>
                    <Button color='primary' size='lg' className='mt-4 text-black rounded-lg' onClick={() => window.open('https://tapgame.mariodimarino.com/')}>Gioca qui!</Button>
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
                    <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
                    <p className="text-gray-900">{content}</p>
                    <Button className='absolute bottom-2 right-2 rounded-full' size='sm' isIconOnly onClick={() => setFlipped(!flipped)} variant='faded' color='primary'>
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const TapGame = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        {
            original: require('../../../../assets/ftg/ftg1.png'),
            thumbnail: require('../../../../assets/ftg/ftg1.png')
        },
        {
            original: require('../../../../assets/ftg/ftg2.png'),
            thumbnail: require('../../../../assets/ftg/ftg2.png')
        },
        {
            original: require('../../../../assets/ftg/ftg3.png'),
            thumbnail: require('../../../../assets/ftg/ftg3.png')
        },
        {
            original: require('../../../../assets/ftg/ftg4.png'),
            thumbnail: require('../../../../assets/ftg/ftg4.png')
        },
        {
            original: require('../../../../assets/ftg/ftg5.png'),
            thumbnail: require('../../../../assets/ftg/ftg5.png')
        },
        {
            original: require('../../../../assets/ftg/ftg6.png'),
            thumbnail: require('../../../../assets/ftg/ftg6.png')
        },
    ];

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="h-screen grid grid-cols-5 grid-rows-5 gap-4 py-4 px-10">
            <StaticProjectCard
                title="Faster Than Green"
                content="Faster Than Green è un gioco per cellulari che mette alla prova i vostri tempi di reazione e la vostra precisione. L'obiettivo del gioco è segnare il maggior numero di punti toccando solo i quadrati verdi su una griglia di 5x5. Il gioco inizia con una griglia 5x5 con 12 quadrati verdi posizionati in modo casuale; quando si tocca un quadrato verde, un quadrato rosso si trasforma in verde e quello premuto diventa rosso. Fate attenzione a non toccare i quadrati rossi, perché sottrarranno 1 punto al vostro punteggio. Il gioco termina allo scadere dei 20 secondi."
                className="col-span-5 row-span-2"
            />
            <div className="col-span-3 row-span-2">
                <div className="card-inner gradient-indigo-purple shadow-lg rounded-lg overflow-hidden">
                    <div className="card-front flex flex-col p-8 text-white">
                        <h1 className="text-5xl font-extrabold mb-4">Details</h1>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>Gold square: appears randomly, gives 5 points.</li>
                            <li>Grey square: appears randomly, removes 5 seconds.</li>
                            <li>Online leaderboard: built with Firebase. <span className="text-sm">Non funziona piu <FontAwesomeIcon icon={faFaceFrown} /></span></li>
                            <li>React Native version <span className="text-sm">(coming soon)</span>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card col-span-2 row-span-5">
                <div className="card w-full h-full">
                    <div className="card-inner flex justify-center bg-white p-5 rounded-lg shadow-lg overflow-hidden flex-col">
                        <video src={require('../../../../assets/ftg/video.mp4')} className="w-full h-full" autoPlay loop muted />
                    </div>
                </div>
            </div>
            <FlippableProjectCard
                title="HTML, CSS, JS"
                content="Prima bozza creata in puro HTML, CSS e JS"
                gradientClassName="gradient-teal-cyan"
                imageSrc={require('../../../../assets/htmlcssjs.png')}
                className="col-span-1 row-span-3"
            />
            <FlippableProjectCard
                title="Amore"
                content="Creato con tanto amore, e un po' di codice"
                gradientClassName="gradient-orange-yellow"
                imageSrc={require('../../../../assets/heart.png')}
                className="col-span-1 row-span-3"
            />
            <FlippableProjectCard
                title="Firebase"
                content="Leaderboard online fatto con Firebase! Anche se non funziona piu' :("
                gradientClassName="gradient-red-pink"
                imageSrc={require('../../../../assets/firebase.png')}
                className="col-span-1 row-span-3"
            />
            {/* <div className="card col-span-2 row-span-3">
                <div className="card-inner gradient-darkred-red shadow-lg rounded-lg overflow-hidden">
                    <div className="card-front flex flex-col p-8 text-white">
                        <h1 className="text-5xl font-extrabold mb-4">More Features</h1>
                        <ul className="list-disc list-inside text-lg space-y-2">
                            <li>Gold square: appears randomly, gives 5 points.</li>
                            <li>Grey square: appears randomly, removes 5 seconds.</li>
                            <li>Online leaderboard: built with Firebase.</li>
                            <li>React Native version (coming soon).</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TapGame;
