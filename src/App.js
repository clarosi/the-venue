import React, { Component } from 'react';
import { Element} from 'react-scroll';
import './resources/css/styles.css';

import Header from './components/Header/Header';
import Featured from './components/Carousel/Featured';
import VenueInfo from './components/VenueInfo/VenueInfo';
import HighLights from './components/HighLights/HighLights';
import Discount from './components/HighLights/Discount/Discount';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="eventsStarts">
          <Featured />
        </Element>
        <Element name="venueInfo">
          <VenueInfo />
        </Element>
        <Element name="highLights">
          <HighLights />
        </Element>
        <Discount />
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
