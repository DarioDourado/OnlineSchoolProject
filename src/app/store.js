import {configureStore} from '@reduxjs/toolkit';
import courseListSlice from '../feactures/CoursesList/CourseListSlice';
import filterSlice from '../feactures/filter/FilterSlice';

export default configureStore({
    reducer:{
        
        courseLibrary: courseListSlice,
        filterLibrary: filterSlice,
    }
});
