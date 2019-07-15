import React, { Component } from "react";
import moment from "moment";

export default class Countdown extends Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  };

  componentDidMount() {
    // create the interval that runs every sec.
    // this.interval = setInterval(() => {
    //   const { timeTillDate, timeFormat } = this.props;
    //   // the final date
    //   const then = moment(timeTillDate, timeFormat);
    //   // the current date
    //   const now = moment();
    //   const countdown = moment.duration(then.diff(now));
    //   const days = countdown._data.days;
    //   const hours = countdown._data.hours;
    //   const minutes = countdown._data.minutes;
    //   const seconds = countdown._data.seconds;
    //   this.setState({ days, hours, minutes, seconds });
    // }, 1000);
  }

  // clear interval if we don't want to continue running after the component is removed from the DOM
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const dueDate = moment(this.props.timeTillDate).format(
      "MMMM Do YYYY, h:mm a"
    );
    const dueDay = moment(this.props.timeTillDate).format("dddd");

    const { days, hours, minutes, seconds } = this.state;

    if (!seconds) {
      return null;
    }
    return (
      <div className="container">
        <h1 className="countdown-header">Countdown</h1>
        <span className="final-date">
          Till {dueDay}, {dueDate}
        </span>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {days}
            <span>days</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span>hours</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span>minutes</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}
