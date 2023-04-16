import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducers';

const rootReducer = combineReducers({
  data: userReducer,
});

export const store = configureStore({reducer:rootReducer});

export default store;

export interface User {
  data: any;
  dataUser: {
    data: any;
    token: string;
    user: {
      id: number;
      name:string;
      email: string;
      employee:string;
    };
  };
}