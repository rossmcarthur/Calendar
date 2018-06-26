import React from 'react';
import { fetchEventsByDate } from '../actions/event_actions';
import { showModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import moment from 'moment';
import ShowDate from './show_date';

class DateItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  getEvents() {
    const events = this.props.events.map( (event, i) => {
      if (moment(this.props.date).format('MMM D YYYY') ===
          moment(event.start_time).format('MMM D YYYY')) {
            const start = moment(event.start_time).format('h:mm A');
            const end = moment(event.end_time).format('hh:mm A');
        return (
          <li key={i} className='day-event-item truncate'>
            {start}-{end}:&nbsp;{event.description}
          </li>
        );
      }
    });
    return events;
  }

  handleShowModal() {
    this.props.showModal(
      <ShowDate
        month={this.props.month}
        events={this.props.events}
        date={this.props.date}
        day={this.props.day}
        />
    );
  }

  render(){
    const { day } = this.props;

    if (day === 'none') {
      return (
        <div className='filler-day-items'></div>
      );
    } else {
      return (
        <div onClick={this.handleShowModal} className='day-items'>
          {day}
          <ul className='display-event-container'>
            {this.getEvents()}
          </ul>
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

const mapDispatchToProps = dispatch => {
  return {
    showModal: component => dispatch(showModal(component)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateItem);
