import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [],
  };

  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser (state, action){
            // const existingIndex = state.user.findIndex(
            //     (item) => item.id === action.payload.id
            //   );

      localStorage.setItem("user", JSON.stringify(state.user));
        }
    }

  })

  export const {getUser} = userSlice.actions
  export default userSlice.reducer
  