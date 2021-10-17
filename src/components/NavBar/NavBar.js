import { useSelector } from "react-redux";

import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import { authSelectors } from "../../Redux/auth";
import User from "./User";
import s from "./Navigation.module.css";

export default function NavBar() {
  const LoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.generalNavContainer}>
      <Navigation />

      {LoggedIn ? <User /> : <AuthNav />}
    </div>
  );
}