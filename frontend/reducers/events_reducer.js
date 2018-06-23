import merge from 'lodash/merge';
import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      return merge({}, state, { [action.event.id]: action.event });
    case REMOVE_EVENT:
      delete newState[action.spot.id];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
