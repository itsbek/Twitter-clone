import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  getTweets(): Promise<TweetsState['items']> {
    return axios
      .get('https://trycode.pw/c/9C2SU.json')
      .then(({ data }) => data);
  },
};
