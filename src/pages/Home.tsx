import React from 'react';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  InputBase,
  Typography,
  withStyles,
  Paper,
  Theme,
} from '@material-ui/core';

import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyles: 'none',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    width: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161,242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
      },
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 30px',
      borderRadius: 30,
      // width: '100%',
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    },
  },
  tweetUserName: {
    color: grey[500],
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    width: 450,
  },
  tweet: {
    // cursor: 'pointer',
    padding: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 245, 250',
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      height: 35,
      padding: 0,
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6" className={classes.tweetsHeader}>
                Главная
              </Typography>
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
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
        </Grid>
      </Grid>
    </Container>
  );
};
