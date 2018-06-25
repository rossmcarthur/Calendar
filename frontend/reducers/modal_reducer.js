import merge from 'lodash/merge';
import {
  CLOSE_MODAL,
  SHOW_MODAL
} from '../actions/modal_actions';

const initialState = {
  component: null
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return { component: action.component };
    case CLOSE_MODAL:
      return { component: null };
    default:
      return state;
  }
};

export default modalReducer;
