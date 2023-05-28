import { createSlice } from "@reduxjs/toolkit";


export const courseListSlice = createSlice({

    // Identificador slice = DataCourses
    name: 'dataCourses',

    initialState: {
        //Array vazia
        dataCourses: [],
        filteredCourses: []
    },

    reducers: {
        //Reducers de Actualização
        getAllCoursesData: (state, action) => {
            state.dataCourses = action.payload;
            state.filteredCourses = action.payload;
        },
        getCourses: (state, action) => {
            state.dataCourses = action.payload;
            state.filteredCourses = action.payload;
        },
        showDevelopment: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Web Development")
        },
        searchByTitle: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.title.search(action.payload) > -1);
        },
        // filter: (state, action) => {
        //     state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === cbtn)
        // }

    }
});

export const { getAllCoursesData, searchByTitle, getCourses, showDevelopment } = courseListSlice.actions;
export default courseListSlice.reducer;
