import React from 'react';
import { BookListContainer } from '../components/BookList';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import StateModel from '../base/state.model';
import { addOrder, changeTotalCartItems, clearCart } from '../redux/actions';
import { connect } from 'react-redux';
import { OrderModel } from '../base/order.model';
import { ORDER_STATUSES } from '../base/order-statuses.model';
import { CartModel } from '../base/cart.model';
import { BookModel } from '../base/book.model';
import { CartItemModel } from '../base/cart-item.model';

class Payment extends React.Component<any, any> {

    handlePayment = () => {
        const {changeTotalCartItems, clearCart, addOrder, user, carts, history} = this.props;
        addOrder({
            status: ORDER_STATUSES.new,
            date: Date.now(),
            id: user.id + '_' + Date.now(),
            books: carts[user.id],
            total: this.getTotal(carts[user.id]).toFixed(2)
        } as OrderModel);
        clearCart(user.id);
        changeTotalCartItems(0);
        history.push('/');
    };

    getTotal = (cart: CartItemModel[]) => {
        const total = cart.reduce((p: number, c: CartItemModel) => {
            p += (Number(c.price) * c.quantity);
            return p;
        }, 0);
        console.log('total');
        console.log(total);
        return total;
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Container>
                <Grid item xs={12}>
                    <Grid item justify='center' xs={12} className='py-4'>
                        <Typography variant='h5' align='center'>Please check all items in the cart:</Typography>
                    </Grid>
                    <Grid container item xs={12}>
                        <BookListContainer mode='preview'/>
                    </Grid>
                    <Grid container item justify='space-between' alignItems='center' className='py-4'>
                        <Button variant="contained" href='/cart'>Back</Button>
                        <Button variant="contained" color="primary" onClick={this.handlePayment}>Pay</Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        carts: state.carts
    }
};

const mapDispatchToProps = {changeTotalCartItems, clearCart, addOrder};

export const PaymentPage = connect(mapStateToProps, mapDispatchToProps)(Payment);
