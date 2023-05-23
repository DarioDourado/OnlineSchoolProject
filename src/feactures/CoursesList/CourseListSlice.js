import { createSlice } from "@reduxjs/toolkit";


export const courseListSlice = createSlice({

    // Identificador slice = DataCourses
    name: 'DataCourses',

    initialState:{
        //Array vazia
        DataCourses: [],
        filteredCourses: [],
    },

    Reducers:{
        //Reducers de Actualização
        getAllCoursesData: (state, action) => {
            state.DataCourses = action.payload;
            state.filteredCourses = action.payload;
        }
    }
});

export const getAllDataCourses  = courseListSlice.actions;
export default courseListSlice.reducer;
