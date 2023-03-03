import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '127.0.0.1:3000';

const initialState = [];
const GET_ALL_TUTOR = 'GET_ALL_TUTOR/fulfilled';
const GET_TUTOR_DETAILS = 'GET_TUTOR_DETAILS/fulfilled';
const ADD_TUTOR_DETAILS = 'ADD_TUTOR/fulfilled';

export const getAllTutor = createAsyncThunk('GET_ALL_TUTOR', async () => {
  const response = axios.get('/api/v2/tutors');
  return response.data;
});

export const getSTutorDetails = createAsyncThunk('GET_TUTOR_DETAILS', async () => {
  const response = axios.get('/api/v2/tutor');
  return response.data;
});

export const addTutor = createAsyncThunk('ADD_TUTOR', async (tutorDetails) => {
  const response = axios.post('/api/v2/tutor', tutorDetails);
  return response.data;
});

const tutorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TUTOR: return [
      ...state, ...action.payload,
    ];
    case GET_TUTOR_DETAILS: return { ...state, ...action.payload };
    case ADD_TUTOR_DETAILS: return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};

export default tutorReducer;
