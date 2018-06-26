import React from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  return {
    event: {
      description: '',
      start_time: '',
      end_time: ''
    },
    formType: 'create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: event => dispatch(createEvent(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
