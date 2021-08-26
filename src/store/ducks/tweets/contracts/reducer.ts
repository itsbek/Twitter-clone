import produce, { Draft } from 'immer';
import { TweetActions, TweetsActionTypes } from './actionCreators';
import { LoadingState, TweetsState } from './state';

const initialTweetState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce(
  (draft: Draft<TweetsState>, action: TweetActions) => {
    // const { type, payload } = action;

    switch (action.type) {
      case TweetsActionTypes.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionTypes.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionTypes.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      default:
        break;
    }
  },
  initialTweetState
);
