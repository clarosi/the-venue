import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_yellow">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    The Venue
                </div> 
                <div className="footer_copyright">
                    The Venue {(new Date()).getFullYear()}. All rights resered.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;