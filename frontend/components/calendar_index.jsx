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
  }

  componentDidMount() {
    this.props.fetchEvents();
    this.setState({
      currentMonth: Object.keys(this.state.months)[this.state.currentDate.getMonth()]
    });
  }

  getDays() {
    const month = this.state.currentMonth;
    const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let firstDay = this.state.currentDate.setDate(1);
    const firstDate = new Date(firstDay).getDay();
    firstDay = weeks[firstDate];

    const days = _.range(1, MONTHS[month] + 1).map( (day, i) => {
    let date = new Date(this.state.currentDate.setDate(day));
      return (
        <DateItem day={day} key={i} date={date}/>
      );
    });
    return days;
  }

  render() {
    return (
      <div>
        <WeekLabel />
        {this.getDays()}
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
