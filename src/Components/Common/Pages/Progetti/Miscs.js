import React, { useState } from 'react';
import './styles.css';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-blue-purple shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-4 md:p-8 text-white">
                    <h1 className="text-lg md:text-5xl font-extrabold mb-1 md:mb-4">{title}</h1>
                    <p className="text-xs md:text-lg mb-3 md:mb-6">{content}</p>
                </div>
            </div>
        </div>
    );
};

const FlippableProjectCard = ({ title, content, videoSrc, gradientClassName, className }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`card ${flipped ? 'flipped' : ''} ${className}`}
            onClick={() => setFlipped(!flipped)}>
            <div className="card-inner" data-cursor-size="50px">
                <div className={`card-front p-1 md:p-5 ${gradientClassName} shadow-lg rounded-lg overflow-hidden`}>
                    {/* video take the whole card */}
                    <video src={videoSrc} autoPlay loop muted className="object-cover w-full h-full rounded-lg" />
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
const FlippableProjectCardImage = ({ title, content, imageSrc, gradientClassName, className }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`card ${flipped ? 'flipped' : ''} ${className}`}
            onClick={() => setFlipped(!flipped)}>
            <div className="card-inner" data-cursor-size="50px">
                <div className={`card-front p-1 md:p-5 ${gradientClassName} shadow-lg rounded-lg overflow-hidden`}>
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

const Miscs = () => {
    return (
        <div className="h-screen grid grid-cols-4 grid-rows-5 gap-2 md:gap-3 py-2 md:py-4 px-10 md:grid-cols-5 md:grid-rows-5">

            {/*!SECTION Titolo */}
            <StaticProjectCard
                title="HTML Playground"
                content="Un piccolo playground dove ho sperimentato con HTML, CSS e JS. Qui ci sono progettini, esperimenti e bozze, fatti per divertimento e per imparare."
                className="col-span-2 row-span-2 order-1 md:order-1 md:col-span-3 md:row-spawn-2"
            />
    
            <FlippableProjectCard
                title="Codice Fiscale Bello"
                content="Un piccolo progetto creato solamente perche' volevo fare un generatore di codici fiscali bello, con un design pulito e moderno, ispirato a Samsung."
                videoSrc={require('../../../../assets/miscs/codicefiscalebello.mp4')}
                gradientClassName="gradient-red-orange"
                className="col-span-2 row-span-2 order-2 md:order-1 md:col-span-1 md:row-span-2"
            />

            <FlippableProjectCard
                title="Dejavu?"
                content="Letteralmente questo sito! Fatto in React, con Next.js e Tailwind CSS."
                gradientClassName="gradient-green-blue"
                videoSrc={require('../../../../assets/miscs/portfolio.mp4')}
                className="col-span-4 row-span-1 order-2 md:order-1 md:col-span-1 md:row-span-2"
            />

            <FlippableProjectCard
                title="Pastel Home"
                content="Start page per browser, con un design pastello e minimalista. Include un orologio, un motore di ricerca e delle sezioni con i link preferiti. Fatto in Angular usando Angular Animations."
                videoSrc={require('../../../../assets/miscs/pastelhome.mp4')}
                gradientClassName="gradient-teal-green"
                className="col-span-4 row-span-1 order-2 md:order-1 md:col-span-3 md:row-span-3"
            />

            <FlippableProjectCardImage
                title="Zhome"
                content="Semplice start page creata con HTML, CSS e JS. Include un orologio, le previsioni meteo e delle sezioni con i link preferiti. Prima start page che ho creato, ispirato a Zune, il lettore musicale di Microsoft 💘."
                imageSrc={require('../../../../assets/miscs/zhome.png')}
                gradientClassName="gradient-blue-purple"
                className="col-span-4 row-span-1 order-2 md:order-1 md:col-span-2 md:row-span-3"
            />


        </div>
    );
};

export default Miscs;
