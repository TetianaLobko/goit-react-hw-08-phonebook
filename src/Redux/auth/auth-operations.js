import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error) {
      alert("Such a user already exists, try to log in.");
      throw new Error(error);
    }
  }
});

const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error) {
      alert(
        "There is no such user, or the data was entered incorrectly, please try again."
      );
      throw new Error(error);
    }
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return data;
  } catch (error) {
    if (error) {
      alert("Щось пішло не так, спробуйте ще раз.");
      throw new Error(error);
    }
  }
});

const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const preToken = state.auth.token;

    if (preToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(preToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      if (error) {
        alert("Something went wrong, try again. error");
        throw new Error(error);
      }
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;