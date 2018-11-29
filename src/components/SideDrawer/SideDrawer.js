import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    const scrollToElementHandler = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true
        });
        props.onClose();
    };

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={props.onClose}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToElementHandler('eventsStarts')}>
                    Events starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElementHandler('venueInfo')}>
                    Venue Info
                </ListItem>
                <ListItem button onClick={() => scrollToElementHandler('highLights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElementHandler('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElementHandler('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;