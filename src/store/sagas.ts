import { all } from 'redux-saga/effects';
import { tweetSaga } from './ducks/tweets/contracts/saga';

export default function* rootSaga() {
  yield all([tweetSaga()]);
}
