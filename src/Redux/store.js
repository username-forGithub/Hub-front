import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tutorReducer from './tutor/tutorReducer';

const rootReducer = combineReducers(
  {
    tutors: tutorReducer,
  },
);

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
