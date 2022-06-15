import { combineReducers } from '@reduxjs/toolkit';
import operations from './listOp';
const rootReducer = combineReducers({
  operations,
});
export default rootReducer;
