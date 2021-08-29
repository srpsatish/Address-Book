import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from '../types';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'Family',
        id: '6129ec1a9a90994ba859d3bf',
        name: 'Swaminath Singh',
        email: 'snsingh01914@gmail.com',
        phone: '9955540779',
      },
      {
        type: 'personal',
        id: '6129eb6b9a90994ba859d3ba',
        name: 'Satish Kumar Singh',
        email: 'singhsatish7275@gmail.com',
        phone: '8177029133',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current  Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current  Contact
  const clearCurrent = contact => {
    dispatch({ type: CLEAR_CURRENT, payload: contact });
  };
  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contact
  const filterContact = contact => {
    dispatch({ type: FILTER_CONTACT, payload: contact });
  };
  // Clear Filter
  const clearFilter = contact => {
    dispatch({ type: CLEAR_FILTER, payload: contact });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
