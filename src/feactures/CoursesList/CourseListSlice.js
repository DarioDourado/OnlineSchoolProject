import { createSlice } from "@reduxjs/toolkit";


export const courseListSlice = createSlice({

    // Identificador slice = DataCourses
    name: 'dataCourses',

    initialState: {
        //Array vazia
        dataCourses: [],
        filteredCourses: [],
        searchBar: []
    },

    reducers: {
        //Reducers de Actualização
        getAllCoursesData: (state, action) => {
            state.dataCourses = action.payload;
            state.filteredCourses = action.payload; 
        },
        getCourses: (state, action) => {
            state.dataCourses
            state.filteredCourses = state.dataCourses
        },
        webDevelopmentFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Web Development")
        },
        excelFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Excel")
        },
        marketingDigitalFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Marketing Digital")
        },
        tecnicasAdministrativasDigitalFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Tecnicas Administrativas")
        },
        officeFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Office")
        },
        dataCienceFilter: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.categorie === "Data Science")
        },

        searchByTitle: (state, action) => {
            state.filteredCourses = state.dataCourses.filter(c => c.course.titleCourse.search(action.payload) > -1);
        },
        // filter: (state, action) => {
        //     state.filteredCourses = state.dataCourses.filter(c => c.course.categorie = action.payload)
        // },
    }
});

        export const { 
            getAllCoursesData, 
            filteredCourses , 
            searchByTitle, 
            getCourses, 
            webDevelopmentFilter, 
            excelFilter, 
            marketingDigitalFilter,
            tecnicasAdministrativasDigitalFilter,
            officeFilter,
            dataCienceFilter,
            filter,        
        
        } = courseListSlice.actions;
export default courseListSlice.reducer;
