import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

import authOperations from "../../Redux/auth/auth-operations";
import s from "../PhoneBook.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const idEmail = shortid.generate();
  const idPassword = shortid.generate();

  return (
    <div>
      <h1 className={s.headingForm}>Authorization page</h1>
      <form className={s.form} action="" onSubmit={handleSubmite}>
        <label className={s.labelName} htmlFor={idEmail}>
          Email
        </label>
        <input
          id={idEmail}
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <label className={s.labelName} htmlFor={idPassword}>
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
          Log in
        </button>
      </form>
    </div>
  );
}
