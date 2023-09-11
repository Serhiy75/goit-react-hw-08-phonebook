import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact } from './operations';
import { deleteContact } from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: '',
  },
  extraReducers: {
    [fetchContact.pending]: state => {
      state.isLoading = true;
    },
    [fetchContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContact.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});
