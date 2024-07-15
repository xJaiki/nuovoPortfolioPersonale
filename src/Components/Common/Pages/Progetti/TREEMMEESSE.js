import React, { useState, useEffect, useRef, useCallback } from 'react';
import './styles.css';
import { Button, image } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faClose, faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const StaticProjectCard = ({ title, content, className }) => {
    return (
        <div className={`card ${className}`}>
            <div className="card-inner gradient-blue-purple shadow-lg rounded-lg overflow-hidden">
                <div className="card-front flex flex-col p-4 md:p-8 text-white">
                    <h1 className="text-2xl md:text-5xl font-extrabold mb-1 md:mb-4">{title}</h1>
                    <p className="text-sm md:text-lg m b-3 md:mb-6">{content}</p>
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

const TREEMMEESSE = () => {
    const images = [
        {
            original: require('../../../../assets/treemmeesse/videoDesktop.gif'),
        },
        {
            original: require('../../../../assets/treemmeesse/videoMobile.gif'),
        },
    ];
    
    return (
        <div className="h-screen grid grid-cols-3 grid-rows-5 gap-2 md:gap-4 py-2 md:py-4 px-10 md:grid-cols-5 md:grid-rows-5">

            {/*!SECTION Titolo */}
            <StaticProjectCard
                title="3MS"
                content="3MS è un applicativo web sviluppato con C# .Net e Angular. Questo sistema consente la gestione e il monitoraggio delle informazioni del personale, offrendo un'esperienza utente ottimizzata per dispositivi mobili. Include funzionalità di autenticazione e autorizzazione tramite Keycloak e supporta il deploy su Windows Server con IIS. Lo sviluppo è stato realizzato in ambiente Unix utilizzando container Docker per Keycloak e MSSQL."
                className="col-span-3 row-span-2 md:col-span-4 md:row-spawn-2 order-1 md:order-1"
            />

            {/*!SECTION carosello */}
            <div className="col-span-3 row-span-1 md:col-span-3 md:row-span-3 md:order-4 order-2">
                <div className="card w-full h-full">
                    <div className="card-inner flex justify-center items-center p-5 gradient-darkred-red rounded-lg shadow-lg overflow-hidden flex-col">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white absolute top-8 left-5 hidden md:block" >Immagini</h1>
                        <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={images[0].original} alt="Desktop" class="object-cover w-full h-full" />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={images[1].original} alt="Mobile" class="object-cover w-full h-full" />
        </div>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
                    </div>
                </div>
            </div>

            {/*!SECTION Tecnologie */}
            <FlippableProjectCard
                title="ASP.NET"
                content="API RESTful sviluppate con ASP.NET"
                gradientClassName="gradient-teal-cyan"
                imageSrc={require('../../../../assets/dotnet.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:order-2 order-3"
            />
            <FlippableProjectCard
                title="Angular"
                content="Frontend costruito con Angular, TypeScript e Bootstrap"
                gradientClassName="gradient-orange-yellow"
                imageSrc={require('../../../../assets/angular.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:order-3 order-4"
            />
            <FlippableProjectCard
                title="Keycloak"
                content="Autenticazione e autorizzazione tramite Keycloak"
                gradientClassName="gradient-deeporange-orange"
                imageSrc={require('../../../../assets/keycloak.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:order-5 order-5"
            />
            <FlippableProjectCard
                title="Docker"
                content="Docker utilizzano in ambiente unix per Keycloak e MSSQL"
                gradientClassName="gradient-lime-green"
                imageSrc={require('../../../../assets/docker.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:order-6 order-6"
            />
            <FlippableProjectCard
                title="Tech Lead"
                content="Ruolo di Tech Lead per la gestione del team di sviluppo"
                gradientClassName="gradient-gray"
                imageSrc={require('../../../../assets/muscle.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 md:order-7 order-7"
            />
            <FlippableProjectCard
                title="Pensato per mobile"
                content="Speso molto tempo per ideare l'UX su mobile"
                gradientClassName="gradient-deeppink-pink"
                imageSrc={require('../../../../assets/mindblown.png')}
                className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 md:order-8 order-8"
            />
        </div>
    );
};

export default TREEMMEESSE;