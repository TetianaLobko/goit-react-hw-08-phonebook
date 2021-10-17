import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../Redux/auth";
import s from "./Navigation.module.css";

export default function Navigation() {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink to="/" className={s.linkNavig} activeClassName={s.active} exact>
        Main
      </NavLink>
      {IsLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.linkNavig}
          activeClassName={s.active}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}