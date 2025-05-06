import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filterSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export default store; 