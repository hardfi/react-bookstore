import * as React from 'react';
import { connect } from 'react-redux';
import { Avatar, Container, Grid } from '@material-ui/core';
import UserModel from '../base/user.model';
import StateModel from '../base/state.model';
import { sessionChange, userChanged } from '../redux/actions';
import { Redirect } from 'react-router-dom';

class Login extends React.Component<any, []> {
    password: string = '';

    componentDidMount(): void {
    }

    selectUser(selectedUser: UserModel): void {
        const {userChanged, sessionChange} = this.props;
        userChanged(selectedUser);
        sessionChange(true);
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {session, user} = this.props;

        return (
            <Container>
                <Grid item xs={12} container spacing={4} justify='center' alignItems='center'>
                    <h2>Log in as one of the following users:</h2>
                </Grid>
                <Grid item xs={12} container spacing={4} justify='center' alignItems='center'>
                    {this.props.contacts.map((contact: UserModel) => {
                        return (
                            <Grid item xs={3} onClick={() => this.selectUser(contact)}>
                                <Avatar alt={contact.username} src={contact.pictureUrl}/>
                                <h5>{contact.name + ' ' + contact.surname}</h5>
                                <h6>{contact.role}</h6>
                            </Grid>
                        )
                    })}
                    {session && user && <Redirect to='/'/>}
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        contacts: state.contacts,
        user: state.user,
        session: state.session
    }
};

const mapDispatchToProps = {userChanged, sessionChange};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
