import React from 'react';
import Button from '@material-ui/core/Button';

import ticketIcon from '../../../resources/images/icons/ticket.png';

const CustomButton = (props) => {
    return (
        <Button
            href={props.btnHref}
            variant={props.btnVariant}
            size={props.btnSize}
            color={props.btnColor}
        >
            <img 
                src={ticketIcon}
                className="iconImage"
                alt="Button Icon"
            />
            {props.btnText}
        </Button>
    );
};

export default CustomButton;