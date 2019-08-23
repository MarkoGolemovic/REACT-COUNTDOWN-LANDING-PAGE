/**
 * Marko Golemovic
 * 2019-07-04
 * Description: Timer will calculate difference between  now and momentTimeFuture    
 */
import React, { Component } from 'react';
import moment from "moment";



//why we define variables otside constructor?
//class variable not object variable
export class Timer extends Component {

    momentTimeFuture = null;
    now = null;
    delta = null;
    status=null;


    // state is attribute which be used for storing and passing for display purpose 
    state = {
        seconds: 0,
        minutes :0,
        hours: 0,
        days: 0
    };

    // props is used for passing future time
    constructor(props) {
        super(props);
        this.momentTimeFuture = new moment(this.props.countTo);
        //this.momentTimeFuture = new moment().add(10, "seconds")
    }

    // Is used for refreshing every 1000ms 
    componentDidMount() {
        this.interval = setInterval(() => this.intervalLoop(), 1000);
    }
    // when you work with time you need to have unsuscribe metod
    componentDidUnMount() {
        clearInterval(this.interval);
    }
    
    /**
     * We will use moment.js to get now time then
     * we will use duration that we get hole interval and we perform diff then
     * We perform conversion according to the size days,hours and minute then
     * If time is passed and we passed boolean true we reset interval
     * Final thing converted vale we store in state
     */
    intervalLoop(){
        let now = moment();
        let duration = moment.duration(this.momentTimeFuture.diff(now));
        let durationSeconds = Math.floor(duration.asSeconds());

        // console.log(now.format());
        // console.log(this.momentTimeFuture.format());
        // console.log(durationSeconds);

        let momentDays = Math.floor(durationSeconds / 60 / 60 / 24);
        durationSeconds = durationSeconds - momentDays * 60 * 60 * 24;

        let momentHours = Math.floor(durationSeconds / 60 / 60);
        durationSeconds = durationSeconds - momentHours * 60 * 60;

        let momentMinutes = Math.floor(durationSeconds / 60);
        durationSeconds = durationSeconds - momentMinutes * 60;

        if (this.props.stopAtZero === true &&  momentDays<0 ){
            clearInterval(this.interval);
            return;    
        }

        this.setState({
            days : momentDays,
            hours : momentHours,
            minutes:momentMinutes,
            seconds: durationSeconds
        });
        
        console.log(this.state);
    }

   // we will use render to display value
 render() {
  return (
    <div className="timer-container">
        <div className="timer-container__item"> 
        <div className="days-number">{this.state.days} </div>
        <div className="days-letter">Days</div>
        </div>
        <div className="timer-container__item"> 
        <div className="hours-number">{this.state.hours}</div>
        <div className="hours-letter">Hours</div> 
        </div>
        <div className="timer-container__item"> 
        <div className="minutes-number">{this.state.minutes}</div> 
        <div className="minutes-letter">Minutes</div>
        </div>
        <div className="timer-container__item"> 
        <div className="seconds-time">{this.state.seconds}</div>
        <div className="seconds-letter">Seconds</div>
        </div>
    </div>
  );
}
}