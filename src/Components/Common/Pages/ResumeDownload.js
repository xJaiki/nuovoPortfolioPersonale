import React from 'react';
const ResumeDownload = () => {
    const downloadResumeOnLoad = () => {
        const link = document.createElement('a');
        link.href = require('../../../assets/resume.pdf');
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div 
            className={`relative min-h-screen flex`}
            style={{backgroundColor: '#D2122E'}}
            onLoad={downloadResumeOnLoad()}
        >
            <div className="container mx-auto flex justify-center items-center text-4xl ">
                Downloading Resume... 🤩
            </div>
        </div>
    );
};


export default ResumeDownload;

