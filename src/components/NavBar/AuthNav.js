import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function authNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={s.linkNavig}
        activeClassName={s.active}
      >
       Registration
      </NavLink>
      <NavLink to="/login" className={s.linkNavig} activeClassName={s.active}>
        Authorization
      </NavLink>
    </div>
  );
}