import { useSelector } from "react-redux";
import Button from "./ButtonList/ButtonList";
import * as phonebookSelectors from "../Redux/phonebook/phonebook-selectors";
import s from "./PhoneBook.module.css";

export default function СontactList() {
  const stateContacts = useSelector(phonebookSelectors.getFilterContacts);

  return (
    <>
      {stateContacts.length > 0 && (
        <div>
          <p className={s.infoContact}>To dial a number, just click on it</p>
          <ul className={s.list}>
            {stateContacts.map(({ id, name, number }) => {
              return (
                <li key={id} className={s.item}>
                  <span className={s.nameContact}>{name}: </span>
                  <span className={s.numberContact}>
                    +38
                    <a href={`tel: ${number}`} className={s.numberContact}>
                      {number}
                    </a>
                  </span>
                  <Button id={id}>Delete</Button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
