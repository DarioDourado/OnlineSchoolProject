import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({

    // Identificador slice = DataCourses
    name: 'dataCourse',

    initialState:{
        //Array vazia
        dataCourses: [],
        filteredCourses: [],
    },

    reducers:{
        //Reducers de Actualização

    }
});

export const { getAllCoursesData, getCourses, showAllCourses, searchByTitle, showDevelopment }  = filterSlice.actions;
export default filterSlice.reducer;
