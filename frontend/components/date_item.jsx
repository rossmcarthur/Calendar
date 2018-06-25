import React from 'react';
import { fetchEventsByDate } from '../actions/event_actions';
import { connect } from 'react-redux';
import moment from 'moment';

class DateItem extends React.Component {
  constructor(props) {
    super(props);
  }

  getEvents() {
    const events = this.props.events.map( (event, i) => {
      if (moment(this.props.date).format('MMM D YYYY') ===
          moment(event.start_time).format('MMM D YYYY')) {
            return (
              <div key={i}>
                <h1>{event.description}</h1>
              </div>
            );
      }
    });
    return events;
  }

  render(){
    const { day } = this.props;

    if (day === 'none') {
      return (
        <div className='day-items'>EMPTY</div>
      );
    } else {
      return (
        <div className='day-items'>
          {day}
          {this.getEvents()}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    events: Object.values(state.entities.events)
  };
};

export default connect(mapStateToProps)(DateItem);
