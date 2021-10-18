import {configureStore}from '@reduxjs/toolkit' ;
import projectSlice from './projectsSlice';
import todosSlice from './todosSlice';
import usersSlice from './usersSlice';

const store = configureStore({
    reducer:{projects:projectSlice.reducer, todos:todosSlice.reducer, users:usersSlice.reducer }
});

export default store;