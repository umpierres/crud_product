import { combineReducers } from '@reduxjs/toolkit';
import productSlice from './productSlice';


export default combineReducers({
  products: productSlice,
});