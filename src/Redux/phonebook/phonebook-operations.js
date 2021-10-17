/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import * as actions from "./phonebook-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const fetchContact = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => actions.fetchContactError(error));
};

const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };
  console.log(contact);
  dispatch(actions.addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

const onDeleted = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};

export default { addContact, onDeleted, fetchContact };