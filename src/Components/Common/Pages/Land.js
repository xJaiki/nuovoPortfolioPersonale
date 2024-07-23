import React from 'react';

const Land = () => {
    const technologies = [
        "C#",
        "Java",
        "Javascript",
        "Typescript",
        "Python",
        "SQL",
        ".NET ",
        "Angular",
        "SAP Commerce Cloud (Hybris)",
        "Spring",
        "Electron",
        "Agile"
    ];
    const roles = [
        "Sviluppo Web",
        "Sviluppo API",
        "Mobile first development",
        "Test unitari"
    ];

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-4" style={{ backgroundColor: '#0f0f0f' }}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 z-10"></div>
                <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 animate-pulse absolute top-1/4 left-1/4"></div>
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-20 animate-pulse absolute top-1/2 left-1/2"></div>
            </div>

            <div className="relative z-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 ">Mario Di Marino</h1>
                <p className="text-lg md:text-xl mb-8  delay-1s">Developer</p>
                
                <div className="mb-8  delay-2s w-full py-2">
                    <h2 className="text-2xl font-semibold mb-2">Cosa conosco:</h2>
                    <ul className="flex flex-wrap md:space-x-4 md:space-y-4 space-x-2 space-y-2 justify-center" style={{ alignItems: 'baseline' }}>
                        {technologies.map((tech, index) => (
                            <li key={index} className="text-sm md:text-lg inline-block bg-gradient-to-r from-blue-500 to-purple-600 md:px-4 md:py-2 px-2 py-1 rounded-full" >{tech}</li>
                        ))}
                    </ul>
                </div>

                <div className=" delay-3s w-full py-2">
                    <h2 className="text-2xl font-semibold mb-2">Cosa faccio:</h2>
                    <ul className="flex flex-wrap justify-center md:space-x-4 md:space-y-4 space-x-2 space-y-2" style={{ alignItems: 'baseline' }}>
                        {roles.map((role, index) => (
                            <li key={index} className="text-sm md:text-lg inline-block bg-gradient-to-r from-green-400 to-blue-500 md:px-4 md:py-2 px-2 py-1 rounded-full">{role}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .delay-1s {
                    animation-delay: 1s;
                }
                .delay-2s {
                    animation-delay: 2s;
                }
                .delay-3s {
                    animation-delay: 3s;
                }
                .animate-pulse {
                    animation: pulse 3s infinite;
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};

export default Land;
