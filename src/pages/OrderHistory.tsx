import React from 'react';
import {
    Avatar, Button,
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

export function OrderHistory(props: any) {
    const {orders, user, books} = props;
    const userOrders = orders.filter((order: OrderModel) => order.id.includes(user.id));
    return (
        <Container>
            <Grid container item xs={12}>
                <Grid container item justify='center' xs={12}>
                    <Typography variant='h5' align='center' className='py-4'>Your previous orders with us:</Typography>
                </Grid>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Books</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userOrders.map((order: OrderModel) => <TableRow key={order.id}>
                            <TableCell><Moment format="LLL">{order.date}</Moment></TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>
                                <div style={{display: 'flex'}}>
                                    {order.books.map((book: CartItemModel) => {
                                        const fullBookInfo = books.find((bk: BookModel) => bk.id === book.id);
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
                        {!userOrders.length && <TableRow>
                          <TableCell colSpan={5}>
                            <Typography variant='h6' align='center'>Your don't have any past orders.</Typography>
                          </TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </Grid>
            <Grid container item justify='space-between' alignItems='center' className='py-4'>
                <Button variant="contained" href='/'>Back</Button>
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

export const OrderHistoryPage = connect(mapStateToProps)(OrderHistory);
