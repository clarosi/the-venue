import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import TimerItem from './TimerItem/TimerItem';

const NUM1 = 24;
const NUM2 = 60;
const NUM3 = 1000;

class Timer extends Component {
    state = {
        deadline: new Date(),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    componentDidMount() {
        setInterval(() => this.getTimeHandler(), NUM3);
    }

    getTimeHandler = () => {
        // this.state.deadline.getTime() + 2*NUM1*NUM2*NUM2*NUM3 = Current date +2 days
        const time = (this.state.deadline.getTime() + 2*NUM1*NUM2*NUM2*NUM3) - Date.parse(new Date());
        
        if (time < 0) {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        }
        else {
            const days = Math.floor(time/(NUM3*NUM2*NUM2*NUM1));
            const hours = Math.floor((time/(NUM3*NUM2*NUM2))%NUM1);
            const minutes = Math.floor((time/NUM3/NUM2)%NUM2);
            const seconds = Math.floor((time/NUM3)%NUM2);
            this.setState({
                days,
                hours,
                minutes,
                seconds
            });
        }
    }

    render() {
        return (
            <Fade left delay={NUM3}>
                <div className="countdown_wrapper">
                    <div className="countdown_top"> 
                        Events Starts In
                    </div>
                    <div className="countdown_bottom">
                        <TimerItem time={this.state.days} tag="Days" />
                        <TimerItem time={this.state.hours} tag="Hrs" />
                        <TimerItem time={this.state.minutes} tag="Min" />
                        <TimerItem time={this.state.seconds} tag="Sec" />
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Timer;