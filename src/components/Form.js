import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import phonebookOperation from "../Redux/phonebook/phonebook-operations";

import shortid from "shortid";
import s from "./PhoneBook.module.css";
import Button from "./Button/Button";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";

export default function Form() {
  const [newName, setName] = useState("");
  const [number, setNumber] = useState("");

  const state = useSelector(phonebookSelectors.getContactList);

  const dispatch = useDispatch();

  const InputValues = (e) => {
    const maxValues = e.target.max;
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);

        break;
      case "number":
        console.log(value.length);
        if (value.length > maxValues) {
          return;
        }
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    const lengthInputNemeChech = newName.length;
    const lengthInputNumberChech = number.length;
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Enter a name greater than 1 character and no more than 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert("Enter a number greater than 7 digits and no more than 10");
      return;
    }

    onSubmit(newName, number, state);

    resetInputValues();
  };

  const onCheckName = (contactList, newNameF) => {
    return contactList.some(({ newName }) => newName === newNameF);
  };

  const onSubmit = (newName, number, contactList) => {
    if (onCheckName(contactList, newName)) {
      alert('This name already exists');
      return;
    }
    dispatch(phonebookOperation.addContact(newName, number));
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();
  return (
    <form className={s.form} onSubmit={addContact}>
      <label htmlFor={idName} className={s.labelName}>
        Name
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        value={newName}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <label htmlFor={idNumber} className={s.labelNumber}>
        Number
      </label>
      <input
        id={idNumber}
        placeholder="(0xx) xxx-xx-xx"
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
        max="10"
      ></input>

      <Button>Add contact</Button>
    </form>
  );
}
