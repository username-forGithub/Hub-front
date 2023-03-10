import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import tutorReducer from './tutor/tutorReducer';
import user from './user/user';

const rootReducer = {
  reducer: {
    tutorReducer,
    user,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
