import { configureStore } from '@reduxjs/toolkit';
import property from './property';

const store = configureStore({
  reducer: {
    property,
  },
});

export default store;
