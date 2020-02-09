import React from 'react';
import {
    Avatar,
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import StateModel from '../base/state.model';
import { connect } from 'react-redux';
import UserModel from '../base/user.model';
import { DispatchProps, StateProps } from '../base/props.model';
import { History } from 'history';

interface ParentProps {
    history: History;
}

type Props = StateProps & DispatchProps & ParentProps;

export function Users(props: Props) {
    const {users, history} = props;

    const goHome = () => {
      history.push('/');
    };

    return (
        <Container>
            <Grid container item xs={12}>
                <Grid container item justify='center' xs={12}>
                    <Typography variant='h5' align='center' className='py-4'>List of users</Typography>
                </Grid>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Picture</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user: UserModel) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.surname}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Avatar alt={user.name} src={user.pictureUrl}></Avatar>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
            <Grid container item justify='space-between' alignItems='center' className='py-4'>
                <Button variant="contained" onClick={goHome}>Back</Button>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state: StateModel) => {
    return {
        users: state.users,
    }
};

export const UsersPage = connect(mapStateToProps)(Users);
