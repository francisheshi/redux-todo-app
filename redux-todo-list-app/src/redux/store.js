import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './TodoSlice.js';

export default configureStore({
    reducer: {
        todos: TodoReducer
    }
});