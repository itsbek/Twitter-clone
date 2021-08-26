import { combineReducers } from 'redux';
import { tweetReducer } from './ducks/tweets/contracts/reducer';

export const rootReducer = combineReducers({
  tweets: tweetReducer,
});
