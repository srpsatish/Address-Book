import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {};
    case CLEAR_CURRENT:
      return {};
    case UPDATE_CONTACT:
      return {};
    case FILTER_CONTACT:
      return {};
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
};
