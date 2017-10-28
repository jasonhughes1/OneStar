import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import generateReview from './generateReview';

const rootReducer = combineReducers({
  user,
  searchResults,
  generateReview
});

export default rootReducer;
