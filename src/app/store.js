import {configureStore} from '@reduxjs/toolkit';
import courseSlice from '../feactures/courses/CourseSlice';

export default configureStore({
    reducer:{
        
        courseLibrary: courseSlice,
    }
});
