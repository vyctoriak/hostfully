import { configureStore } from '@reduxjs/toolkit';
import property from './property';
import reservations from './reservations';

const store = configureStore({
  reducer: {
    property,
    reservations,
  },
});

export default store;
