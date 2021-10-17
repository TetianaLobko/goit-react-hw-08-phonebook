import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import { authOperations } from "../../Redux/auth";
import s from "../PhoneBook.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const idName = shortid.generate();
  const idEmail = shortid.generate();
  const idPassword = shortid.generate();
  return (
    <div>
      <h1 className={s.headingForm}>Registration page</h1>
      <form className={s.form} action="" onSubmit={handleSubmite}>
        <label htmlFor={idName} className={s.labelName}>
          Name
        </label>
        <input
          id={idName}
          value={name}
          name="name"
          type="name"
          onChange={handleChange}
        />
        <label htmlFor={idEmail} className={s.labelName}>
          Email
        </label>
        <input
          id={idEmail}
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />

        <label htmlFor={idPassword} className={s.labelName}>
          Password
        </label>
        <input
          id={idPassword}
          value={password}
          name="password"
          type="password"
          onChange={handleChange}
        />

        <button className={s.btnReg} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
