import * as EventAPI from '../util/events_api_util';
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'DELETE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

export const receiveAllEvents = events => {
  return {
    type: RECEIVE_ALL_EVENTS,
    events
  };
};

export const receiveEvent = event => {
  return {
    type: RECEIVE_EVENT,
    event
  };
};

export const removeEvent = event => {
  return {
    type: REMOVE_EVENT,
    event
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors
  };
};

export const clearEventErrors = () => {
  return {
    type: CLEAR_EVENT_ERRORS
  };
};

export const createEvent = event => dispatch => {
  return EventAPI.createEvent(event).then(event => (
    dispatch(receiveEvent(event)),
    err => dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchEvents = () => dispatch => {
  return EventAPI.fetchEvents().then(events => {
    return dispatch(receiveAllEvents(events)),
    errors => dispatch(receiveErrors(errors.responseJSON));
  });
};

export const fetchEvent = id => dispatch => {
  return EventAPI.fetchEvent(id).then(event => {
    return dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON));
  });
};

export const deleteEvent = id => dispatch => {
  return EventAPI.deleteEvent(id).then(event => {
    return dispatch(removeEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON));
  });
};

export const updateEvent = event => dispatch => {
  return EventAPI.updateEvent(event).then(event => {
    return dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON));
  });
};
