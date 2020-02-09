import {
    Avatar,
    IconButton,
    ListItemAvatar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, Typography
} from '@material-ui/core';
import { BookModel } from '../base/book.model';
import RemoveIcon from '@material-ui/icons/Remove';
import { CartItemModel } from '../base/cart-item.model';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import StateModel from '../base/state.model';
import {
    addBookQuantity,
    addBookToCart,
    changeTotalCartItems,
    deductBookQuantity,
    removeBookFromCart
} from '../redux/actions';
import { connect } from 'react-redux';
import { DispatchProps, StateProps } from '../base/props.model';

interface ParentProps {
    mode: string;
}

type Props = StateProps & DispatchProps & ParentProps;

class BookList extends React.Component<Props, any> {

    handleRemoveItem = (book: BookModel) => {
        const {removeBookFromCart, addBookQuantity, changeTotalCartItems, user, carts} = this.props;
        removeBookFromCart(book, user.id);
        addBookQuantity(book.id);
        changeTotalCartItems(carts[user.id].reduce((p: number, c: CartItemModel) => p + c.quantity, 0));
    };

    handleAddItem(book: BookModel): void {
        const {addBookToCart, deductBookQuantity, changeTotalCartItems, user, carts} = this.props;
        addBookToCart(book, user.id);
        deductBookQuantity(book.id);
        changeTotalCartItems(carts[user.id].reduce((p: number, c: CartItemModel) => p + c.quantity, 0));
    }

    getTotalForRow(userCart: CartItemModel[], book: BookModel): string {
        if (userCart) {
            const item = userCart.find((item: CartItemModel) => item.id === book.id);
            if (item) {
                return (item.quantity * parseFloat((book.price).toString())).toFixed(2);
            } else {
                return '0.00';
            }
        }
        return '';
    }

    getTotal(userCart: CartItemModel[]): string {
        if (userCart) {
            return userCart.reduce((p: number, c: CartItemModel) => {
                p += (Number(c.price) * c.quantity);
                return p;
            }, 0).toFixed(2);
        }
        return '';
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {user, carts, books, mode} = this.props;
        const userCart = user.id in carts ? carts[user.id] : null;
        const userBooks = userCart ? userCart.map((item: CartItemModel) => books.find((book: BookModel) => book.id === item.id)) : [];
        return (
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Cover</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userBooks.forEach((book: BookModel) => <TableRow key={book.id}>
                        <TableCell>
                            <ListItemAvatar>
                                <Avatar alt={book.title} src={book.book_cover}></Avatar>
                            </ListItemAvatar>
                        </TableCell>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{'\u20AC' + book.price}</TableCell>
                        {mode === 'edit' &&
                        <TableCell>
                          <IconButton color="primary"
                                      onClick={() => this.handleRemoveItem(book)}
                                      aria-label="add to shopping cart">
                            <RemoveIcon/>
                          </IconButton>
                            {userCart.find((item: CartItemModel) => item.id === book.id).quantity}
                          <IconButton color="primary"
                                      onClick={() => this.handleAddItem(book)}
                                      aria-label="add to shopping cart">
                            <AddIcon/>
                          </IconButton>
                        </TableCell>}
                        {mode === 'preview' &&
                        <TableCell>{userCart.find((item: CartItemModel) => item.id === book.id).quantity}</TableCell>}
                        <TableCell>{'\u20AC' + this.getTotalForRow(userCart, book)}</TableCell>
                    </TableRow>)}
                    <TableRow>
                        <TableCell colSpan={4}/>
                        <TableCell align="right"><strong>Total:</strong></TableCell>
                        <TableCell>{this.getTotal(userCart)}</TableCell>
                    </TableRow>
                    {!userBooks.length && <TableRow>
                      <TableCell colSpan={6}>
                        <Typography variant='h6' align='center'>Your cart is empty.</Typography>
                      </TableCell>
                    </TableRow>}
                </TableBody>
            </Table>
        )
    }

}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        total: state.total,
        carts: state.carts,
        books: state.books
    }
};
const mapDispatchToProps = {
    addBookQuantity,
    deductBookQuantity,
    changeTotalCartItems,
    removeBookFromCart,
    addBookToCart
};

export const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);
