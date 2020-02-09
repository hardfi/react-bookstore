import React from 'react';
import { BookListContainer } from '../components/BookList';
import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from '@material-ui/core';
import StateModel from '../base/state.model';
import { addOrder, changeTotalCartItems, clearCart } from '../redux/actions';
import { connect } from 'react-redux';
import { OrderModel } from '../base/order.model';
import { ORDER_STATUSES } from '../base/order-statuses.model';
import { CartItemModel } from '../base/cart-item.model';
import ConfirmDialog from '../components/ConfirmDialog';
import { toast } from 'react-toastify';
import { PaymentModel } from '../base/payment-model';
import { DispatchProps, StateProps } from '../base/props.model';
import { History } from 'history';

interface ParentProps {
    history: History;
}
type Props = StateProps & DispatchProps & ParentProps;

class Payment extends React.Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isDialogOpen: false,
            payment: PaymentModel.card
        };
    }

    handlePayment = () => {
        const {changeTotalCartItems, clearCart, addOrder, user, carts, history} = this.props;
        addOrder({
            status: this.state.payment === PaymentModel.card ? ORDER_STATUSES.paid : ORDER_STATUSES.new,
            date: Date.now(),
            id: user.id + '_' + Date.now(),
            books: carts[user.id],
            total: this.getTotal(carts[user.id]),
            user: user
        } as OrderModel);
        clearCart(user.id);
        changeTotalCartItems(0);
        this.handleConfirmClose();
        toast.success('Order has been successfully placed. Thank you!');
        history.push('/');
    };

    handleConfirmOpen = () => {
        this.setState({isDialogOpen: true});
    };

    handleConfirmClose = () => {
        this.setState({isDialogOpen: false});
    };

    handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({payment: (event.target as HTMLInputElement).value});
    };

    getDialogText = () => {
        if (this.state.payment === PaymentModel.delivery) {
            return `Do you want to confirm the purchase and pay the order at the pick up?`
        } else {
            return `Do you confirm that the amount due will be debited from you credit card?`
        }
    };

    getTotal = (cart: CartItemModel[]) => {
        return cart.reduce((p: number, c: CartItemModel) => {
            p += (Number(c.price) * c.quantity);
            return p;
        }, 0).toFixed(2);
    };

    goToCart = () => {
        const {history} = this.props;
        history.push('/cart');
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Container>
                <Grid item xs={12}>
                    <Grid container item justify='center' xs={12} className='py-4'>
                        <Typography variant='h5' align='center'>Please check all items in the cart:</Typography>
                    </Grid>
                    <Grid container item xs={12}>
                        <BookListContainer mode='preview'/>
                    </Grid>
                    <Grid container item xs={12} className='py-4' justify='flex-end'>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Pick payment method:</FormLabel>
                            <RadioGroup aria-label="gender"
                                        name="gender1"
                                        row
                                        value={this.state.payment}
                                        onChange={this.handlePaymentChange}>
                                <FormControlLabel value="delivery" control={<Radio/>} label="Pay at delivery"/>
                                <FormControlLabel value="card" control={<Radio/>} label="Pay by credit card"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid container item justify='space-between' alignItems='center' className='py-4'>
                        <Button variant="contained" onClick={this.goToCart}>Back</Button>
                        <Button variant="contained" color="primary" onClick={this.handleConfirmOpen}>Pay</Button>
                    </Grid>
                </Grid>
                <ConfirmDialog open={this.state.isDialogOpen}
                               onClose={this.handleConfirmClose}
                               dialogTitle='Payment confirmation'
                               dialogText={this.getDialogText()}
                               onConfirm={this.handlePayment}/>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        carts: state.carts,
    }
};

const mapDispatchToProps = {changeTotalCartItems, clearCart, addOrder};

export const PaymentPage = connect(mapStateToProps, mapDispatchToProps)(Payment);
