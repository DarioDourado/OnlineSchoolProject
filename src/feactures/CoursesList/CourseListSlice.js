import { createSlice } from "@reduxjs/toolkit";


export const courseListSlice = createSlice({

    name: 'DataCourses',

    initialState:{
        DataCourses: [],
    },

    Reducers:{
        getAllCoursesData: (state, action) => {
            state.DataCourses = action.payload;
        }
    }
});

export const { getAllCoursesData, DataCourses, getAllDataCourses } = courseListSlice.actions;
export default courseListSlice.reducer;
