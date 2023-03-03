import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '127.0.0.1:3000';

const initialState = [];
const GET_ALL_TUTOR = 'GET_ALL_TUTOR/fulfilled';

export const getAllTutor = createAsyncThunk('GET_ALL_TUTOR', async () => {
  const response = axios.get('/api/v2/tutors');
  return response.data;
});

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TUTOR: return {
      ...state, ...action.payload,
    };
    default: {
      return state;
    }
  }
};

export default tutorReducer;
