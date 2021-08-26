import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextareaAutosize,
} from '@material-ui/core';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import classNames from 'classnames';
import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
  maxRows,
}: AddTweetFormProps) => {
  const [text, setText] = useState<string>('');
  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length;

  const handleChangeTextArea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget && textLimitPercent < 100) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
  };

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователья`}
          src="https://ca-times.brightspotcdn.com/dims4/default/423fc28/2147483647/strip/true/crop/958x539+1+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc9%2F98%2Ffa3b0cb001e3541c5818a89cd5cc%2Fla-1475087498-snap-photo"
        />
        <TextareaAutosize
          onChange={handleChangeTextArea}
          className={classes.addFormTextArea}
          placeholder="Что происходит?"
          value={text}
          maxRows={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton>
            <EmojiOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: 'red' } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="static"
                  thickness={5}
                  value={100}
                  size={20}
                />
              </div>
            </>
          )}

          <Button
            onClick={handleClickAddTweet}
            disabled={textLimitPercent >= MAX_LENGTH}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  );
};
