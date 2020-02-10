import React from 'react';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { History } from 'history';
import { BookListContainer } from '../components/BookList';
import StateModel from '../base/state.model';
import { addOrder, changeTotalCartItems, clearCart } from '../redux/actions';
import { OrderModel } from '../base/order.model';
import { ORDER_STATUSES } from '../base/order-statuses.model';
import { CartItemModel } from '../base/cart-item.model';
import ConfirmDialog from '../components/ConfirmDialog';
import { PaymentModel } from '../base/payment-model';
import { DispatchProps, StateProps } from '../base/props.model';

interface ParentProps {
  history: History;
}

type Props = StateProps & DispatchProps & ParentProps;

class Payment extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDialogOpen: false,
      payment: PaymentModel.card,
    };
  }

  handlePayment = () => {
    const {
      changeTotalCartItems, clearCart, addOrder, user, carts, history,
    } = this.props;
    const {
      payment,
    } = this.state;
    addOrder({
      status: payment === PaymentModel.card ? ORDER_STATUSES.paid : ORDER_STATUSES.new,
      date: Date.now(),
      id: `${user.id}_${Date.now()}`,
      books: carts[user.id],
      total: this.getTotal(carts[user.id]),
      user,
    } as OrderModel);
    clearCart(user.id);
    changeTotalCartItems(0);
    this.handleConfirmClose();
    toast.success('Order has been successfully placed. Thank you!');
    history.push('/');
  };

  handleConfirmOpen = () => {
    this.setState({ isDialogOpen: true });
  };

  handleConfirmClose = () => {
    this.setState({ isDialogOpen: false });
  };

  handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ payment: (event.target as HTMLInputElement).value });
  };

  getDialogText = () => {
    const { payment } = this.state;
    if (payment === PaymentModel.delivery) {
      return 'Do you want to confirm the purchase and pay the order at the pick up?';
    }
    return 'Do you confirm that the amount due will be debited from you credit card?';
  };

  getTotal = (cart: CartItemModel[]) => cart.reduce((p: number, c: CartItemModel) => {
    // eslint-disable-next-line no-param-reassign
    p += (Number(c.price) * c.quantity);
    return p;
  }, 0).toFixed(2);

  goToCart = () => {
    const { history } = this.props;
    history.push('/cart');
  };

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal |
    boolean | null | undefined {
    const { payment, isDialogOpen } = this.state;
    return (
      <Container>
        <Grid item xs={12}>
          <Grid container item justify='center' xs={12} className='py-4'>
            <Typography variant='h5' align='center'>Please check all items in the cart:</Typography>
          </Grid>
          <Grid container item xs={12}>
            <BookListContainer mode='preview' />
          </Grid>
          <Grid container item xs={12} className='py-4' justify='flex-end'>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Pick payment method:</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='gender1'
                row
                value={payment}
                onChange={this.handlePaymentChange}
              >
                <FormControlLabel value='delivery' control={<Radio />} label='Pay at delivery' />
                <FormControlLabel value='card' control={<Radio />} label='Pay by credit card' />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid container item justify='space-between' alignItems='center' className='py-4'>
            <Button variant='contained' onClick={this.goToCart}>Back</Button>
            <Button variant='contained' color='primary' onClick={this.handleConfirmOpen}>Pay</Button>
          </Grid>
        </Grid>
        <ConfirmDialog
          open={isDialogOpen}
          onClose={this.handleConfirmClose}
          dialogTitle='Payment confirmation'
          dialogText={this.getDialogText()}
          onConfirm={this.handlePayment}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: StateModel) => ({
  user: state.user,
  carts: state.carts,
});

const mapDispatchToProps = { changeTotalCartItems, clearCart, addOrder };

export const PaymentPage = connect(mapStateToProps, mapDispatchToProps)(Payment);
