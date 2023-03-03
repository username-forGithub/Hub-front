import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tutorReducer from './tutor/tutorReducer';

const rootReducer = combineReducers(
  {
    tutors: tutorReducer,
  },
);

const store = configureStore(rootReducer);

export default store;
