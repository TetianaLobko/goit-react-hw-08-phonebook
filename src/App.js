import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import s from "./components/PhoneBook.module.css";

import authOperations from "./Redux/auth/auth-operations";
import NavBar from "./components/NavBar/NavBar";
import { Switch } from "react-router-dom";
import RegisterView from "./components/views/RegisterView";
import LoginView from "./components/views/LoginView";
import ContactsView from "./components/views/ContactsView";
import HomeView from "./components/views/HomeView";
import PrivateRoute from "./components/views/PrivateRoute";
import PublicRoute from "./components/views/PublicRoute";
import { authSelectors } from "./Redux/auth";

export default function Mobile() {
  const dispatch = useDispatch();
  const refreshingPage = useSelector(authSelectors.getRefreshingPage);
  console.log(refreshingPage);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !refreshingPage && (
      <div className={s.container}>
        <NavBar />
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted>
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" exact>
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </div>
    )
  );
}