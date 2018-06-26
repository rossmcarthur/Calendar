import React from 'react';
import { connect } from 'react-redux';
import { updateEvent } from '../actions/event_actions';
import { closeModal } from '../actions/modal_actions';
import EventForm from './event_form';
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
  const selectedEvent = state.entities.events[ownProps.eventId];
  return {
    event: {
      description: selectedEvent.description,
      start_time: moment(selectedEvent.start_time).format("hh:mm"),
      end_time: moment(selectedEvent.end_time).format("hh:mm"),
      id: ownProps.eventId
    },
    formType: "edit"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: event => dispatch(updateEvent(event)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
