import React from 'react';
import { connect } from 'react-redux';
import { createEvent, clearEventErrors } from '../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  debugger
  return {
    event: {
      description: '',
      start_time: '',
      end_time: ''
    },
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: event => dispatch(createEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
