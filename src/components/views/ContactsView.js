import phonebookOperations from "../../Redux/phonebook/phonebook-operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Form from "../Form";
import ContactList from "../ContactList";
import SearchContact from "../SearchContact";
import s from "../PhoneBook.module.css";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.headingForm}>Phonebook</h1>
      <Form />
      <h2 className={s.contactList}>Contacts</h2>
      <SearchContact />
      <ContactList />
    </>
  );
}