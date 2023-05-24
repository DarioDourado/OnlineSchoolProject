import { createSlice } from "@reduxjs/toolkit";


export const courseSlice = createSlice({

    // Identificador slice = dataCourses
    name: 'dataCourses',

    initialState:{
        //Array vazia
        dataCourses: [],
        filteredCourses: [],
    },

    reducers:{
        //reducers de Actualização
        getAllCoursesData: (state, action) => {
            state.dataCourses = action.payload;
            state.filteredCourses = action.payload;
        }
    }
});

export const { getAllCoursesData }  = courseSlice.actions;
export default courseSlice.reducer;
