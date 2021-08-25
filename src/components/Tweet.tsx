import React from 'react';
import { useHomeStyles } from '../pages/Home';

import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { Grid, Paper, Typography, Avatar, IconButton } from '@material-ui/core';

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      variant="outlined"
      className={classNames(classes.tweetsHeader, classes.tweet)}
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователья ${user.fullName}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullName}</b>
            <span className={classes.tweetUserName}> @{user.userName}</span>
            &nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <CommentIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <RepeatIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <ReplyIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
