import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import CreateFormContainer from './create_form_container';
import EventItem from './event_item';
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
              <EventItem
                key={i}
                month={this.props.month}
                day={this.props.day}
                event={event}
                date={this.props.date}
                />
            );
      }
    });
    return events;
  }

handleCreateEvent() {
    this.props.showModal(
      <CreateFormContainer
        month={this.props.month}
        day={this.props.day}
        date={this.props.date}
        closeModal={this.props.closeModal}
        />
    );
  }

  render() {
    const { day, month } = this.props;
    return (
      <div className='show-date-container'>
        <h1 className='show-day'>{month}&nbsp;{day}</h1>
        <ul className='show-event-list'>{this.getEvents()}</ul>
        <button className='create-button' onClick={this.handleCreateEvent}>Create Event</button>
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
