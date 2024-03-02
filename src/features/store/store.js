import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../authSlice/authSlice";
import jobSlice from "../jobSlice/jobSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        job:jobSlice
    }
});

export default store;