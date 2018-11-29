import React from 'react';
import Zoom from 'react-reveal/Zoom';

const VenueInfoItem = (props) => {
    const className = ['vn_icon_square', props.bckColor];

    return (
        <Zoom 
            duration={props.duration} 
            delay={props.delay}
        >
            <div className="vn_item">
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className={className.join(' ')}></div>
                        <div
                            className="vn_icon"
                            style={{background: `url(${props.vnIcon})`}}
                        >
                        </div>    
                        <div className="vn_title">
                            {props.vnTitle}
                        </div>   
                        <div className="vn_desc">
                            {props.vnDesc}
                        </div> 
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default VenueInfoItem;