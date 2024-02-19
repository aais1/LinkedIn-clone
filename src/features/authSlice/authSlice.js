import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
  };
  

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.user = payload;
            
          },
      logout: (state) => {
        state.user = null;
        state.username = null;
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  
  export default authSlice.reducer;
  