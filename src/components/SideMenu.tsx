import React, { useState } from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleTweet, setvisibleTweet] = useState<boolean>(false);

  const handleClickOpenAddTweet = () => {
    setvisibleTweet(true);
  };

  const onCloseAddTweet = () => {
    setvisibleTweet(false);
  };
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton
          className={classes.logo}
          aria-label="delete"
          color="primary"
        >
          <TwitterIcon className={classes.logoIcon} color="primary" />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <FormatListBulletedIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock onClose={onCloseAddTweet} visible={visibleTweet} title="">
          <div style={{ width: 550 }}>
            <AddTweetForm maxRows={15} classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  );
};
