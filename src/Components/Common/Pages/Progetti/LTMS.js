import React, { useState } from 'react';
import './styles.css';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-darkgreen-teal shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-4 text-white md:p-8">
                    <h1 className="text-2xl md:text-5xl font-extrabold">{title}</h1>
                    <h3 className="hidden text-md md:text-2xl font-semibold mb-1">Launch Team Management System</h3>
                    <p className="text-sm md:text-lg ">{content}</p>
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
            <div className="card-inner" data-cursor-size="50px">
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

const LTMS = () => {
    const images = [
        {
            original: require('../../../../assets/ltms/ltms1.png'),
            thumbnail: require('../../../../assets/ltms/ltms1.png')
        },
        {
            original: require('../../../../assets/ltms/ltms2.png'),
            thumbnail: require('../../../../assets/ltms/ltms2.png')
        },
        {
            original: require('../../../../assets/ltms/ltms3.png'),
            thumbnail: require('../../../../assets/ltms/ltms3.png')
        },
        {
            original: require('../../../../assets/ltms/ltms4.png'),
            thumbnail: require('../../../../assets/ltms/ltms4.png')
        },
        {
            original: require('../../../../assets/ltms/ltms5.png'),
            thumbnail: require('../../../../assets/ltms/ltms5.png')
        },
        {
            original: require('../../../../assets/ltms/ltms6.png'),
            thumbnail: require('../../../../assets/ltms/ltms6.png')
        },
    ];

    const openImage = (index) => () => {
        window.open(images[index].original, '_blank');
    };

    return (
        <div className="h-screen grid grid-cols-3 md:grid-cols-5 grid-rows-5 gap-2 py-2 px-10 md:gap-3 md:py-4"
            style={{ backgroundColor: '#1f1f1ff' }}>

            <StaticProjectCard
                title="LTMS"
                content="Un gestionale di utenti con lato amministrativo e lato utente. Permette la gestione di ore di lavoro, attività, ordini, richieste d'acquisto, forecast, warroom, costi degli utenti per ora, mail periodiche ed export in Excel."
                className="md:col-span-3 md:row-span-2 col-span-3 row-span-1 md:order-2 order-2"
            />

            <FlippableProjectCard
                title="ASP.NET MVC"
                content="Utilizzato sotto richiesta del cliente, imparato in autonomia"
                gradientClassName="gradient-green-blue"
                imageSrc={require('../../../../assets/aspnetmvc.webp')}
                className="col-span-1 row-span-1 md:order-3 order-3"
            />

            <FlippableProjectCard
                title="Figma"
                content="Usato per la creazione di wireframes e mockups"
                gradientClassName="gradient-gray"
                imageSrc={require('../../../../assets/figma.png')}
                className="col-span-2 row-span-1 md:order-4 order-8 md:col-span-1 md:row-span-1"
            />

            <FlippableProjectCard
                title="Microsoft SQL Server"
                content="Database disegnato e implementato da zero, in totale autonomia"
                gradientClassName="gradient-yellow"
                imageSrc={require('../../../../assets/mssql.png')}
                className="col-span-1 row-span-1 md:order-5 order-5"
            />

            <FlippableProjectCard
                title="Pazienza"
                content="Comunicazione completa con il cliente, per capire le sue esigenze e soddisfarle"
                gradientClassName="gradient-indigo-purple"
                imageSrc={require('../../../../assets/devemoji.png')}
                className="col-span-1 row-span-1 md:order-6 order-4"
            />

            <div className="card md:col-span-2 md:row-span-3 col-span-2 row-span-2 md:order-7 order-3">
                <div className="card-inner gradient-indigo-purple shadow-lg rounded-lg overflow-hidden">
                    <div className="card-front flex flex-col p-4 text-white">
                        <h1 className="text-2xl md:text-5xl font-extrabold mb-1">Descrizione</h1>
                        <p className="text-sm md:text-lg mb-1">
                            Un sistema gestionale per il management del team di lancio, che include:
                        </p>
                        <ul className="list-disc list-inside text-left text-xs md:text-base space-y-1">
                            <li>Calendario per l'inserimento di ore di lavoro e attività lato utente.</li>
                            <li>Visualizzazione dati lato amministrativo/PM.</li>
                            <li>Gestione degli ordini e delle richieste d'acquisto.</li>
                            <li>Forecast e warroom.</li>
                            <li>Gestione dei costi degli utenti per ora.</li>
                            <li>Mail periodiche e export in Excel.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-span-3 row-span-1 md:order-8 order-4 md:col-span-3 md:row-span-3">
                <div className="card w-full h-full">
                    <div className="card-inner flex justify-center items-center p-5 gradient-darkred-red rounded-lg shadow-lg overflow-hidden flex-col">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white absolute top-8 left-5 hidden md:block" >Immagini</h1>
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className="md:w-3/4 md:h-2/4 w-3/4 h-full">
                            {images.map((image, index) => (
                                <div key={index} onClick={openImage(index)}>
                                    <img src={image.original} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LTMS;
