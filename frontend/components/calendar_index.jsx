import React from 'react';
import { fetchEvents } from '../actions/event_actions';
import { connect } from 'react-redux';
import { merge } from 'lodash';
import DateItem from './date_item';
import WeekLabel from './week_label';

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

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.currentMonth !== this.state.currentMonth) {
  //
  //   }
  // }

  getDays() {
    const month = this.state.currentMonth;
    const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let firstDay = this.state.currentDate.setDate(1);
    const firstDate = new Date(firstDay).getDay();
    firstDay = weeks[firstDate];

    const fillerDays = _.range(0, firstDate + 1).map( (day, i) => {
      return (
        <DateItem day='none' date={null} key={day + 100}/>
      );
    });

    const days = _.range(1, MONTHS[month] + 1).map( (day, i) => {
    let date = new Date(this.state.currentDate.setDate(day));
      return (
        <DateItem day={day} key={i} date={date}/>
      );
    });
    return { fillerDays, days };
  }

  handleMonthChange(move) {
    let currentDate = this.state.currentDate;
    if (move === "forward") {
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
    const { days } = this.getDays();
    const { fillerDays } = this.getDays();
    return (
      <div>
        <button onClick={() => this.handleMonthChange('back')}>-</button>
        <h1>{this.state.currentMonth}</h1>
        <button onClick={() => this.handleMonthChange('forward')}>+</button>
        <WeekLabel />
        {fillerDays}
        {days}
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
