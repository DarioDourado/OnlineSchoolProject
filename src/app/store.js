import {configureStore} from '@reduxjs/toolkit';
import courseListSlice from '../feactures/CoursesList/CourseListSlice';

// Configurar a store
export default configureStore({
    reducer:{
        jsonData: courseListSlice,
    }
});
