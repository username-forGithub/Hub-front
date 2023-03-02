import { combineReducers, combineStore } from '@reduxjs/toolkit';

import tutorReducer from './tutor/tutorReducer';

const rootReducer = combineReducers(
  {
    tutors: tutorReducer,
  },
);

const store = combineStore(rootReducer);

export default store;
