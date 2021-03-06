import React from 'react';
import { fetchEvents } from '../actions/event_actions';
import { connect } from 'react-redux';
import { merge } from 'lodash';
import DateItem from './date_item';

const MONTHS = {
  JANUARY: 31,
  FEBRUARY: 28,
  MARCH: 31,
  APRIL: 30,
  MAY: 31,
  JUNE: 30,
  JULY: 31,
  AUGUST: 31,
  SEPTEMBER: 30,
  OCTOBER: 31,
  NOVEMBER: 30,
  DECEMBER: 31
};

class CalendarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: this.props.currentDate,
      currentMonth: null,
      months: MONTHS
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.setState({
      currentMonth: Object.keys(this.state.months)[this.state.currentDate.getMonth()]
    });
  }

  getDays() {
    const month = this.state.currentMonth;
    let weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let firstDay = this.state.currentDate.setDate(1);
    const firstDate = new Date(firstDay).getDay();
    const year = this.state.currentDate.getFullYear();

    const daysOfWeek = weekdays.map( (day, i) => {
      return (
        <li className='day-name' key={i + 100}>{day}</li>
      );
    });

    const fillerDays = _.range(0, firstDate).map( (day, i) => {
      return (
        <DateItem day='none' date={null} key={day + 100}/>
      );
    });

    const days = _.range(1, MONTHS[month] + 1).map( (day, i) => {
    let date = new Date(this.state.currentDate.setDate(day));
      return (
        <DateItem month={this.state.currentMonth} day={day} key={i} date={date}/>
      );
    });

    const weekHeader = (
      <ul className='days-of-week'>
        {daysOfWeek}
      </ul>
    );

    return { year, weekHeader, fillerDays, days };
  }

  handleMonthChange(move) {
    let currentDate = this.state.currentDate;
    if (move === 'forward') {
      currentDate = currentDate.setMonth(currentDate.getMonth() + 1, 1);
      currentDate = new Date(currentDate);
      this.setState({
        currentDate,
        currentMonth: Object.keys(this.state.months)[currentDate.getMonth()]
      });
    } else {
      currentDate = currentDate.setMonth(currentDate.getMonth() - 1, 1);
      currentDate = new Date(currentDate);
      this.setState({
        currentDate,
        currentMonth: Object.keys(this.state.months)[currentDate.getMonth()]
      });
    }
  }

  render() {
    const { year, weekHeader, days, fillerDays } = this.getDays();

    return (
      <div className='main-calendar-container'>
        <div className='calendar-header'>
          <span className='month-changer' onClick={() => this.handleMonthChange('back')}>&#8592;</span>
          <h1 className='current-month'>{this.state.currentMonth}, {year}</h1>
          <span className='month-changer' onClick={() => this.handleMonthChange('forward')}>&#8594;</span>
        </div>
        <div className='calendar-body'>
          {weekHeader}
          <ul className='calendar-days'>
            {fillerDays}
            {days}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const currentDate = new Date();
  return {
    events: state.entities.events,
    currentDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarIndex);
