import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    create: (state, action) => {
      state.reservations.push(action.payload);
    },
    update: (state, action) => {
      const newReservations = state.reservations.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });

      state.reservations = newReservations;
    },
    remove: (state, action) => {
      const newReservations = state.reservations.filter(
        (item) => item.id !== action.payload,
      );

      state.reservations = newReservations;
    },
  },
});

export const { create, update, remove } = reservationsSlice.actions;

export default reservationsSlice.reducer;
