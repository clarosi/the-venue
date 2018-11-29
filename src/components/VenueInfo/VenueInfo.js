import React from 'react';
import VenueInfoItem from './VenueInfoItem/VenueInfoItem';

import calendarIcon from '../../resources/images/icons/calendar.png';
import locationIcon from '../../resources/images/icons/location.png';

const VenueInfo = () => {
    const numSetting = 500;
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 2);
    return (
        <div className="bck_black">
            <div className="center_wrapper">   
                <div className="vn_wrapper">
                    <VenueInfoItem 
                        duration={numSetting}
                        bckColor="bck_red"
                        vnIcon={calendarIcon}
                        vnTitle="Event Date & Time"
                        vnDesc={`${eventDate.toLocaleDateString()} @ ${eventDate.toLocaleTimeString()}`}
                    />
                    <VenueInfoItem 
                        duration={numSetting}
                        delay={numSetting}
                        bckColor="bck_yellow"
                        vnIcon={locationIcon}
                        vnTitle="Event Location"
                        vnDesc="Pinayagan Norte, Tubigon, Bohol, Philippines"
                    />
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;