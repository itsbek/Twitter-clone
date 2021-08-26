import { call, put, takeEvery } from 'redux-saga/effects';
import { TweetsApi } from '../../../../services/api/tweetsApi';
import {
  setLoadingState,
  setTweets,
  TweetsActionTypes,
} from './actionCreators';
import { LoadingState } from './state';

export function* fetchTweetsRequest() {
  try {
    const items = yield call(TweetsApi.getTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  console.log(121212);
  yield takeEvery(TweetsActionTypes.FETCH_TWEETS, fetchTweetsRequest);
}
