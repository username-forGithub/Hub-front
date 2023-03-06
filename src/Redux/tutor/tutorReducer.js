import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = '127.0.0.1:3000';
axios.defaults.baseURL = 'http://127.0.0.1:3000';

const initialState = [];
const GET_ALL_TUTOR = 'GET_ALL_TUTOR/fulfilled';
const GET_TUTOR_DETAILS = 'GET_TUTOR_DETAILS/fulfilled';
const ADD_TUTOR_DETAILS = 'ADD_TUTOR/fulfilled';
const REMOVE_TUTOR_DETAILS = 'REMOVE_TUTOR/fulfilled';

export const getAllTutor = createAsyncThunk('GET_ALL_TUTOR', async () => {
  const response = await axios.get('/tutors/index');
  return response.data;
});

export const getSTutorDetails = createAsyncThunk(
  'GET_TUTOR_DETAILS',
  async () => {
    const response = await axios.get('/tutors/index');
    return response.data;
  },
);

export const addTutor = createAsyncThunk('ADD_TUTOR', async (tutorDetails) => {
  const response = axios.post('/api/v2/tutors', tutorDetails);
  return response.data;
});

export const removeTutor = createAsyncThunk('REMOVE_TUTOR', async (id) => {
  const response = axios.delete(`/api/v2/tutors/${id}`);
  return response.data;
});

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TUTOR:
      return [...action.payload];
    case GET_TUTOR_DETAILS:
      return state.map((tutor) =>
        tutor.id === action.payload.id ? action.payload : tutor,
      );
    case ADD_TUTOR_DETAILS:
      return { ...state, ...action.payload };
    case REMOVE_TUTOR_DETAILS:
      return state.filter((tutor) => tutor.id !== action.payload);
    default:
      return state;
  }
};

export default tutorReducer;
