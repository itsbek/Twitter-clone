import { Action } from 'redux';
import { LoadingState, TweetsState } from './state';

export enum TweetsActionTypes {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface FetchTweetsActionInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.FETCH_TWEETS;
}

export interface SetTweetsLoadingInterface extends Action<TweetsActionTypes> {
  type: TweetsActionTypes.SET_LOADING_STATE;
  payload: LoadingState;
}

export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => ({
  type: TweetsActionTypes.SET_TWEETS,
  payload,
});

export const setLoadingState = (
  payload: LoadingState
): SetTweetsLoadingInterface => ({
  type: TweetsActionTypes.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionTypes.FETCH_TWEETS,
});

export type TweetActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingInterface
  | FetchTweetsActionInterface;
