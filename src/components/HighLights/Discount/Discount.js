import React, { Component } from 'react';
import CustomButton from '../../UI/Button/Button'

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    };

    componentDidUpdate() {
        setTimeout(() => {this.porcentageHandler()}, 30);
    }

    porcentageHandler = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState(prevState => ({discountStart: prevState.discountStart + 1}));
        }
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={this.porcentageHandler}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat ac tincidunt vitae semper. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed odio morbi quis commodo odio. Interdum varius sit amet mattis vulputate enim.</p>
                            <div>
                                <CustomButton 
                                    btnVariant="contained"
                                    btnSize="small"
                                    btnColor="primary"
                                    btnText="Purchase Tickets"
                                />
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;