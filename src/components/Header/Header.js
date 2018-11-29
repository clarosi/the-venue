import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from '../SideDrawer/SideDrawer';

class Header extends Component {
    state = {
        isDrawerOpen: false,
        isShowHeader: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componendWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = () => {
        if (window.scrollY > 0)
            this.setState({isShowHeader: true});
        else 
            this.setState({isShowHeader: false});
    }

    toggleDrawerHandler = () => {
        this.setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen
        }));
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.isShowHeader ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">MUSICAL EVENTS</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={this.toggleDrawerHandler}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer 
                        open={this.state.isDrawerOpen}
                        onClose={this.toggleDrawerHandler}
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;