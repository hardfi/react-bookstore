import * as React from 'react';
import { connect } from 'react-redux';
import {
  Avatar, Container, createStyles, Grid, Theme,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import UserModel from '../base/user.model';
import StateModel from '../base/state.model';
import { sessionChange, userChanged } from '../redux/actions';
import { DispatchProps, StateProps } from '../base/props.model';

type Props = StateProps & DispatchProps;

const useStyles = makeStyles((theme: Theme) => createStyles({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function Login(props: Props) {
  const classes = useStyles();
  const { session, user, users } = props;

  const selectUser = (selectedUser: UserModel) => {
    const { userChanged, sessionChange } = props;
    userChanged(selectedUser);
    sessionChange(true);
  };

  return (
    <Container className='h-flex'>
      <Grid container direction='column'>
        <Grid
          item
          container
          spacing={4}
          justify='center'
          alignItems='center'
          className='pb-3'
        >
          <h2 className='pb-3'>Log in as one of the following users:</h2>
        </Grid>
        <Grid
          item
          container
          spacing={4}
          justify='center'
          alignItems='center'
        >
          {users.map((usr: UserModel) => (
            <Grid
              container
              item
              justify='center'
              alignItems='center'
              direction='column'
              xs={2}
              key={usr.id}
              className='cursor-pointer'
              onClick={() => selectUser(usr)}
            >
              <Avatar
                alt={usr.username}
                src={usr.pictureUrl}
                className={classes.large}
              />
              <h4>{`${usr.name} ${usr.surname}`}</h4>
              <span>{usr.role}</span>
            </Grid>
          ))}
          {session && user && <Redirect to='/' />}
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: StateModel) => ({
  users: state.users,
  user: state.user,
  session: state.session,
});

const mapDispatchToProps = { userChanged, sessionChange };

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
