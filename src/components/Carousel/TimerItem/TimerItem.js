import React from 'react';

const TimerItem = (props) => {
    return (
        <div className="countdown_item">
            <div className="countdown_time">
                {props.time}
            </div>
            <div className="countdown_tag">
                {props.tag}
            </div>
        </div>
    );
};

export default TimerItem;