import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import menu_itemsReducer, {
  menu_itemsFetch,
} from "./components/homeuser/ProductSlice";

import { menu_itemsApi } from "./components/homeuser/ProductsApi";
import cartReducer, { getTotals }  from "./components/homeuser/CartSlice";
import userReducer, {getUser} from './components/homeuser/UserSclice'

const store = configureStore({
  //check what we have in state
  reducer: {
    menu_items: menu_itemsReducer,
    cart: cartReducer,
    user: userReducer,

    [menu_itemsApi.reducerPath]: menu_itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menu_itemsApi.middleware),
});

store.dispatch(menu_itemsFetch());
store.dispatch(getTotals());
store.dispatch(getUser());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
