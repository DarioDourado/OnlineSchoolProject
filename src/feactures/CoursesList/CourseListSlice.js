import { createSlice } from "@reduxjs/toolkit";


export const courseListSlice = createSlice({

    // Identificador slice = DataCourses
    name: 'dataCourses',

    initialState:{
        //Array vazia
        dataCourses: [],
        filteredCourses: [],
    },

    reducers:{
        //Reducers de Actualização
        getAllCoursesData: (state, action) => {
            state.dataCourses = action.payload;
            state.filteredCourses = action.payload;
        }
    }
});

export const { getAllCoursesData }  = courseListSlice.actions;
export default courseListSlice.reducer;
