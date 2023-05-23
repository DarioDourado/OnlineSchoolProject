import {configureStore} from '@reduxjs/toolkit';
import courseListSlice from '../feactures/CoursesList/CourseListSlice';

export default configureStore({
    reducer:{
        
        courseLibrary: courseListSlice,
    }
});
