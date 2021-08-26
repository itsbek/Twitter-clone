import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core';

import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import { SearchOutlined } from '@material-ui/icons';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { AddTweetForm } from '../../components/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SearchTextField';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/contracts/actionCreators';

export const Home = (): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets);
  }, []);

  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={3} sm={1}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item md={6} sm={8}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6" className={classes.tweetsHeader}>
                Главная
              </Typography>
            </Paper>
            <Paper>
              <div className={classes.addForm}>
                <AddTweetForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident maiores sed dignissimos molestias voluptatem aliquam cupiditate distinctio quidem delectus iste."
                  classes={classes}
                  user={{
                    fullName: 'Dursunvek',
                    userName: 'dursik',
                    avatarUrl:
                      'https://c.files.bbci.co.uk/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg',
                  }}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item md={3} sm={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              fullWidth
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#коронавирус"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов 163 122
                      </Typography>
                    }
                  />
                </ListItem>

                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#талибан"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов 199 872
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock} variant="outlined">
              <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquyh08OQ5_mcl9Od_hgS-S5JXd4-SkYPpb7WXQeTNprznIRnPQcTf7KjFAjbH9iPZ9Dg&usqp=CAU"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock of shame"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FaveDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
