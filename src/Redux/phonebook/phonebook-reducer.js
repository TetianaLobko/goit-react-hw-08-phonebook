import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  valuesFilter,
} from "./phonebook-actions";

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [valuesFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
});