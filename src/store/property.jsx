import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  properties: [
    {
      id: 1,
      title: 'Tropical Hotel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dolor id sem pellentesque convallis. Cras accumsan at eros sit amet cursus. Cras rhoncus sapien a nulla consectetur, eu semper leo pharetra. Praesent sapien lacus, scelerisque eu consectetur at, tincidunt id orci. Pellentesque justo dolor, accumsan luctus gravida nec, sollicitudin a elit.',
      image:
        'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      price: 600,
    },
    {
      id: 2,
      title: 'Country Hotel',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dolor id sem pellentesque convallis. Cras accumsan at eros sit amet cursus. Cras rhoncus sapien a nulla consectetur, eu semper leo pharetra. Praesent sapien lacus, scelerisque eu consectetur at, tincidunt id orci. Pellentesque justo dolor, accumsan luctus gravida nec, sollicitudin a elit.',
      image:
        'https://images.unsplash.com/photo-1623068769255-923b5307dd7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      price: 450,
    },
  ],
  selectedProperty: null,
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
  },
});

export const { setSelectedProperty } = propertySlice.actions;

export default propertySlice.reducer;
