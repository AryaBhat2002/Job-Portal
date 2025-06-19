import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        // addJob: (state, action) => {
        //     state.allJobs.push(action.payload);
        // },
        // updateJob: (state, action) => {
        //     const index = state.allJobs.findIndex(job => job.id === action.payload.id);
        //     if (index !== -1) {
        //         state.allJobs[index] = action.payload;
        //     }
        // },
        // deleteJob: (state, action) => {
        //     state.allJobs = state.allJobs.filter(job => job.id !== action.payload);
        // }
    }
});

export const { setAllJobs } = jobSlice.actions;
export default jobSlice.reducer;