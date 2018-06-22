import * as EventAPI from '../util/events_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'DELETE_EVENT';

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

export const createEvent = event => dispatch => {
  return EventAPI.createEvent(event).then(event => {
    return dispatch(receiveEvent(event));
  });
};

export const fetchEvents = () => dispatch => {
  return EventAPI.fetchEvents().then(events => {
    return dispatch(receiveAllEvents(events));
  });
};

export const fetchEvent = id => dispatch => {
  return EventAPI.fetchEvent(id).then(event => {
    return dispatch(receiveEvent(event));
  });
};

export const deleteEvent = id => dispatch => {
  return EventAPI.deleteEvent(id).then(event => {
    return dispatch(removeEvent(event));
  });
};

export const updateEvent = event => dispatch => {
  return EventAPI.updateEvent(event).then(event => {
    return dispatch(receiveEvent(event));
  });
};
