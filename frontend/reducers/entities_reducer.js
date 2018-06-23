import events from './events_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({ events });

export default entitiesReducer;
