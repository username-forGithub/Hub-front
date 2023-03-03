import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import tutorReducer from './tutor/tutorReducer';

const rootReducer = {
  reducer: {
    tutorReducer,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
