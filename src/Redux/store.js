import { applyMiddleware, combineReducers, combineStore } from '@reduxjs/toolkit';

import tutorReducer from './tutor/tutorReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(
  {
    tutors: tutorReducer,
  },
);

const store = combineStore(rootReducer, applyMiddleware(thunk));

export default store;
