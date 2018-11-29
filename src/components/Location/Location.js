import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="Pinayagan Norte, Tubigon, Bohol"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.936519251467!2d123.9434409262915!3d9.936598921578518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2fa35d9db27d%3A0xce7e8f8ec8793115!2sPinayagan+Norte%2C+Tubigon%2C+Bohol!5e0!3m2!1sen!2sph!4v1541122656770" 
                width="100%" 
                height="450" 
                frameBorder="0" 
                allowFullScreen
                >
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;