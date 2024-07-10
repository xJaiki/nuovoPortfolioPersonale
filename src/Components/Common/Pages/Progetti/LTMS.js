import React, { useState } from 'react';
import './styles.css';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from 'react-image-gallery';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-darkgreen-teal shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-8 text-white">
                    <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
                    <h3 className="text-2xl font-semibold mb-4">Launch Team Management System</h3>
                    <p className="text-lg mb-6">{content}</p>
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

const LTMS = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="h-screen grid grid-cols-5 grid-rows-5 gap-4 py-4 px-10" style={{ backgroundColor: '#1f1f1ff' }}>
            <StaticProjectCard
                title="LTMS"
                content="Un gestionale di utenti con lato amministrativo e lato utente. Permette la gestione di ore di lavoro, attività, ordini, richieste d'acquisto, forecast, warroom, costi degli utenti per ora, mail periodiche ed export in Excel."
                className="col-span-3 row-span-2"
            />
            <FlippableProjectCard
                title="ASP.NET MVC"
                content="Utilizzato sotto richiesta del cliente, imparato in autonomia"
                gradientClassName="gradient-green-blue"
                imageSrc={require('../../../../assets/aspnetmvc.webp')}
                className="col-span-1 row-span-1"
            />
            <FlippableProjectCard
                title="Figma"
                content="Usato per la creazione di wireframes e mockups"
                gradientClassName="gradient-gray"
                imageSrc={require('../../../../assets/figma.png')}
                className="col-span-1 row-span-1"
            />
            <FlippableProjectCard
                title="Microsoft SQL Server"
                content="Database disegnato e implementato da zero, in totale autonomia"
                gradientClassName="gradient-yellow"
                imageSrc={require('../../../../assets/mssql.png')}
                className="col-span-1 row-span-1"
            />
            <FlippableProjectCard
                title="Pazienza"
                content="Comunicazione completa con il cliente, per capire le sue esigenze e soddisfarle"
                gradientClassName="gradient-indigo-purple"
                imageSrc={require('../../../../assets/devemoji.png')}
                className="col-span-1 row-span-1"
            />
            <div className="card col-span-2 row-span-3">
                <div className="card-inner gradient-indigo-purple shadow-lg rounded-lg overflow-hidden">
                    <div className="card-front flex flex-col p-8 text-white">
                        <h1 className="text-5xl font-extrabold mb-4">Descrizione</h1>
                        <p className="text-lg mb-6">
                            Un sistema gestionale per il management del team di lancio, che include:
                        </p>
                        <ul className="list-disc list-inside text-left text space-y-2">
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
            <div className="col-span-3 row-span-3">
                <div className="card w-full h-full">
                    <div className="card-inner flex justify-center items-center p-5 gradient-darkred-red rounded-lg shadow-lg overflow-hidden flex-col">
                        <h1 className="text-5xl font-extrabold text-white absolute top-8 left-5">Immagini</h1>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={true}
                            showBullets={true}
                            showThumbnails={false}
                            showIndex={false}
                            showNav={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LTMS;
