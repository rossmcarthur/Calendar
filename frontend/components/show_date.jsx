import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import CreateEvent from './create_event';
import { showModal, closeModal } from '../actions/modal_actions';

class ShowDate extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
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

handleCreateEvent() {
    this.props.showModal(
      <CreateEvent
        month={this.props.month}
        day={this.props.day}
        date={this.props.date}
        closeModal={this.props.closeModal}
        />
    );
  }

  render() {
    const { day } = this.props;
    return (
      <div className='show-date-container'>
        <h1>{day}</h1>
        <h1>{this.getEvents()}</h1>
        <button onClick={this.handleCreateEvent}>Create Event</button>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    showModal: component => dispatch(showModal(component)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect (null, mapDispatchToProps)(ShowDate);
