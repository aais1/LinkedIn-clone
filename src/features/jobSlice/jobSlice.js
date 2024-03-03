import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    job: null,
  };
  

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJob: (state, {payload}) => {
            state.job = payload;
            console.log('====================================');
            console.log(payload);
            console.log('====================================');
          },
        removeJob: (state) => {
        state.job = null;
        }
  }});
  
  export const { setJob, removeJob } = jobSlice.actions;
  
  export default jobSlice.reducer;
  