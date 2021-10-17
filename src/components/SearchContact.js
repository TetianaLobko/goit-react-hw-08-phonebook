import React from "react";
import shortid from "shortid";
import * as phonebookActions from "../Redux/phonebook/phonebook-actions";

import s from "./PhoneBook.module.css";
import { useSelector, useDispatch } from "react-redux";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

export default function SearchContact() {
  const state = useSelector(phonebookSelectors.getContactFilter);
  const dispatch = useDispatch();

  const searchContact = (e) => {
    dispatch(phonebookActions.valuesFilter(e.target.value));
  };

  const id = shortid.generate();
  return (
    <div className={s.containerSearch}>
      <label className={s.labelSearch} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={state}
        onChange={searchContact}
        id={id}
        autoComplete="off"
        className={s.inputSearch}
      ></input>
    </div>
  );
}