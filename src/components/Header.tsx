import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import StateModel from '../base/state.model';
import { Link, Redirect } from 'react-router-dom';
import { Avatar, Badge, createStyles, Grid, IconButton, Theme } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { UserActionsContainer } from './UserActions';
import { makeStyles } from '@material-ui/core/styles';
import { USER_ROLE } from '../base/user-role.model';
import { DispatchProps, StateProps } from '../base/props.model';
import { History } from 'history';

interface ParentProps {
    history: History;
}

type Props = StateProps & DispatchProps & ParentProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        span: {
            marginLeft: '10px'
        }
    }),
);

function Header(props: Props) {
    const classes = useStyles();
    const {user, session, total, history} = props;

    const handleGoToHistory = () => {
        history.push('/orders-history');
    };

    const handleGoToUsers = () => {
        history.push('/users');
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to='/'>
                        <IconButton style={{color: 'white'}} aria-label="add to shopping cart">
                            <HomeIcon/>
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        Awesome Bookstore
                    </Typography>
                    {session && user &&
                    <Grid container item xs={7} direction='row' alignItems='center' justify='space-between'>
                      <Grid container item xs={6} alignItems='center'>
                        <Avatar alt={user.username} src={user.pictureUrl}/>
                        <span className={classes.span}>{user.name + ' ' + user.surname}</span>
                      </Grid>
                      <Grid container item xs={6} justify='flex-end'>
                          {user.role === USER_ROLE.client && <Link to='/cart'>
                            <IconButton style={{color: 'white'}} aria-label="add to shopping cart">
                              <Badge badgeContent={total} color="secondary">
                                <ShoppingCartIcon/>
                              </Badge>
                            </IconButton>
                          </Link>}
                        <UserActionsContainer goToHistory={handleGoToHistory} goToUsers={handleGoToUsers}/>
                      </Grid>
                    </Grid>}
                </Toolbar>
            </AppBar>
            {!session && <Redirect to='/login'/>}
        </div>
    );
}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        session: state.session,
        total: state.total
    }
};

export const HeaderContainer = connect(mapStateToProps)(Header);
