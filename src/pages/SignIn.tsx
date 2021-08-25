import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 84px)',
  },
  blueSide: {
    backgroundColor: '#71c9f8',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '250%',
    height: '260%',
  },
  blueSideList: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideItem: {
    marginBottom: 40,
  },
  blueSideIcon: {
    fontSize: 32,
    color: 'white',
    marginRight: 15,
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
  margin: {},
}));

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn();
  const [visibleModal, setVisibleModal] = useState<
    'signIn' | 'signOut' | 'signUp'
  >();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };
  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };
  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideList}>
          <li className={classes.blueSideItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideIcon} />
              Читайте о том, что вам интересно
            </Typography>
          </li>
          <li className={classes.blueSideItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blueSideIcon} />
              Присоедининяйтесь к общению
            </Typography>
          </li>
          <li className={classes.blueSideItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideIcon} />
              Узнайте, о чем говорят в мире{' '}
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideIcon} />
          <Typography className={classes.loginSideTitle} variant="h4">
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b> Присойденяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 20 }}
            color="primary"
            fullWidth
            variant="contained"
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={handleClickOpenSignIn}
            color="primary"
            fullWidth
            variant="outlined"
          >
            Войти
          </Button>

          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title={'Войти в аккаунт'}
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                >
                  Войти
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title={'Создайте учетную запись'}
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCloseModal}
                >
                  Далее
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
};
