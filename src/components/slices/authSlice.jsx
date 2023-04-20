import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from './Api'
import jwtDecode from "jwt-decode";


const initialState = {
    token: localStorage.getItem("token"),
    user_name: "",
    email: "",
    user_id: "",
    is_dmin: false,
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
  };


export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, { rejectWithValue }) => {
      try {
        const token = await axios.post(`${url}/signup`, {
          user_name: values.user_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
          is_admin: values.is_admin,
        });
  
        localStorage.setItem("token", (token.data));
  
        return token.data;
      } catch (error) {
        console.log(error.response);
        return rejectWithValue(error.response.data);
      }
    }
  );
  
const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
      
      loadUser(state, action) {
        const token = state.token;
  
        if (token) {
          const user = (token);
          return {
            ...state,
            token,
            user_name: user.user_name,
            email: user.email,
            user_id: user.user_id,
            is_admin: user.is_admin,
            userLoaded: true,
          };
        } else return { ...state, userLoaded: true };
      },
      logoutUser(state, action) {
        localStorage.removeItem("token");
  
        return {
          ...state,
          token: "",
          user_name: "",
          email: "",
          user_id: "",
          is_admin: false,
          registerStatus: "",
          registerError: "",
          loginStatus: "",
          loginError: "",
        };
      },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
          return { ...state, registerStatus: "pending" };
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
          if (action.payload) {
            const user = (action.payload);
            return {
              ...state,
              token: action.payload,
              user_name: user.user_name,
              email: user.email,
              user_id: user.user_id,
              is_admin: user.is_admin,
              registerStatus: "success",
            };
          } else return state;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
          return {
            ...state,
            registerStatus: "rejected",
            registerError: action.payload,
          };
        });

    }
});

  export default authSlice.reducer;