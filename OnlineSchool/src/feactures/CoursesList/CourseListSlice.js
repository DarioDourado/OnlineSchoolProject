import { createSlice } from "@reduxjs/toolkit";

export const courseListSlice = createSlice({

    name: 'courses',

    initialState:{
        allDataCourses: [],

    },

    reducers:{
        getAllCourses: (state, action) => {
            state.allDataCourses = action.payload;
        }
    }
});

export const { getAllCourses } = courseListSlice.actions;
export default courseListSlice.reducer;
