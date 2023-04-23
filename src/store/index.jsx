import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducers';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export const store = configureStore({reducer:userReducer});

export default store;
