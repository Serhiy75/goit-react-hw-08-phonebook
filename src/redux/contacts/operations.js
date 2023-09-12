// 'https://64f9ff184098a7f2fc1543aa.mockapi.io';

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
