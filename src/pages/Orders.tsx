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
    Tooltip,
    Typography
} from '@material-ui/core';
import { OrderModel } from '../base/order.model';
import StateModel from '../base/state.model';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { CartItemModel } from '../base/cart-item.model';
import { BookModel } from '../base/book.model';
import { USER_ROLE } from '../base/user-role.model';
import { StatusChangeSelectContainer } from '../components/StatusChangeSelect';
import { DispatchProps, StateProps } from '../base/props.model';
import { History } from 'history';

interface ParentProps {
    history: History;
}

type Props = StateProps & DispatchProps & ParentProps;

export function Orders(props: Props) {
    const {orders, user, books, history} = props;
    const isAdmin = user.role === USER_ROLE.admin;
    const allOrders = isAdmin ? orders : orders.filter((order: OrderModel) => order.id.includes((user.id).toString()));

    const goHome = () => {
      history.push('/');
    };

    return (
        <Container>
            <Grid container item xs={12}>
                <Grid container item justify='center' xs={12}>
                    <Typography variant='h5' align='center' className='py-4'>{isAdmin ? 'Customer orders:' : 'Your previous orders with us:'}</Typography>
                </Grid>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            {isAdmin && <TableCell>User</TableCell>}
                            <TableCell>Status</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Books</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders.map((order: OrderModel) => <TableRow key={order.id}>
                            <TableCell><Moment format="LLL">{order.date}</Moment></TableCell>
                            {isAdmin && <TableCell>{order.user.name} {order.user.surname}</TableCell>}
                            {isAdmin && <TableCell>
                              <StatusChangeSelectContainer status={order.status} orderId={order.id}/>
                            </TableCell>}
                            {!isAdmin && <TableCell>{order.status}</TableCell>}
                            <TableCell>{'\u20AC' + order.total}</TableCell>
                            <TableCell>
                                <div style={{display: 'flex'}}>
                                    {order.books.map((book: CartItemModel) => {
                                        const fullBookInfo: BookModel = books.find((bk: BookModel) => bk.id === book.id) as BookModel;
                                        return (
                                            <Tooltip
                                                key={fullBookInfo.id}
                                                title={fullBookInfo.title + ', ' + fullBookInfo.author + ' | Quantity: ' + book.quantity}>
                                                <Avatar key={book.id} alt={fullBookInfo.title}
                                                        src={fullBookInfo.book_cover}></Avatar>
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </TableCell>
                        </TableRow>)}
                        {!allOrders.length && <TableRow>
                          <TableCell colSpan={5}>
                            <Typography variant='h6' align='center'>{isAdmin ? 'There\'s nothing to show' : 'Your don\'t have any past orders.'}</Typography>
                          </TableCell>
                        </TableRow>}
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
        user: state.user,
        orders: state.orders,
        books: state.books
    }
};

export const OrderHistoryPage = connect(mapStateToProps)(Orders);
