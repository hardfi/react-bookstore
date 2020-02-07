import React from 'react';
import { Button, Container, Grid, IconButton, Typography } from '@material-ui/core';
import { BookListContainer } from '../components/BookList';
import StateModel from '../base/state.model';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { changeTotalCartItems, clearCart } from '../redux/actions';

function Cart(props: any) {
    const {carts, user, clearCart, changeTotalCartItems, history} = props;
    const userCart = carts[user.id];

    const clearAllCartItems = () => {
        clearCart(user.id);
        changeTotalCartItems(0);
        history.push('/');
    };

    return (
        <Container>
            <Grid item xs={12}>
                <Grid container item justify='center' xs={12} className='py-4'>
                    <Typography variant='h5' align='center'>Items in your cart:</Typography>
                </Grid>
                <Grid container>
                    <BookListContainer mode='edit'/>
                </Grid>
            </Grid>
            <Grid container justify='space-between' alignItems='center' className='py-4'>
                <div>
                    <Button variant="contained" href='/'>Back</Button>
                    <IconButton color="primary"
                                onClick={() => clearAllCartItems()}
                                disabled={!userCart}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <Button variant="contained" color="primary" href='/payment' disabled={!userCart}>Proceed to
                    payment</Button>
            </Grid>
        </Container>
    );

}

const mapStateToProps = (state: StateModel) => {
    return {
        carts: state.carts,
        user: state.user
    }
};

const mapDispatchToProps = {changeTotalCartItems, clearCart};

export const CartPage = connect(mapStateToProps, mapDispatchToProps)(Cart);
