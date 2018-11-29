import React, { Component } from 'react';
import CustomButton from '../UI/Button/Button';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {
        prices: [500, 1000, 1500],
        positions: ['Balcony','Medium','Star'],
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        ],
        delay: [500, 0, 500]
    };

    showBoxesHandler = () => (
        this.state.prices.map((price, index) => (
            <Zoom 
                key={index}
                delay={this.state.delay[index]}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>Php {price}</span>
                            <span>{this.state.positions[index]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.description[index]}
                        </div>
                        <div className="pricing_buttons">
                            <CustomButton 
                                btnVariant="contained"
                                btnSize="small"
                                btnColor="primary"
                                btnText="Purchase Tickets"
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxesHandler()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;