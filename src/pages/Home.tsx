import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import StateModel from '../base/state.model';
import {
    addBookToCart,
    booksFetched,
    changeTotalCartItems,
    deductBookQuantity,
    deleteBook, dialogClose, dialogOpen,
    modalClose,
    modalOpen,
    selectBook
} from '../redux/actions';
import { BookModel } from '../base/book.model';
import { CartItemModel } from '../base/cart-item.model';
import { BookInfoDialogContainer } from '../components/BookInfoDialog';
import { BookTile } from '../components/BookTile';
import ConfirmDialog from '../components/ConfirmDialog';
import { toast } from 'react-toastify';
import { DispatchProps, StateProps } from '../base/props.model';

type Props = StateProps & DispatchProps;

class Home extends React.Component<Props, []> {
    key = '4lVEBSCdFNHEqwxXMup58JdxrCSgJ1DK';

    componentDidMount(): void {
        if (!this.props.books.length) {
            const {booksFetched} = this.props;
            fetch('https://api.nytimes.com/svc/books/v3/lists/current/mass-market-paperback.json?api-key=' + this.key)
                .then(res => res.json())
                .then(response => {
                    const books = response.results.books.map((book: any) => ({
                        id: book.primary_isbn10,
                        title: book.title,
                        author: book.author,
                        published_date: 'n/a',
                        book_cover: book.book_image,
                        quantity: 10,
                        price: this.getRandomPrice(),
                        description: book.description
                    } as BookModel));
                    booksFetched(books);
                });
        } else {
            this.changeTotalCartItems();
        }
    }

    getRandomPrice = () => {
        const min = 5;
        const max = 20;
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    handleAddToCart = (book: BookModel) => {
        const {deductBookQuantity, addBookToCart, user} = this.props;
        deductBookQuantity(book.id);
        addBookToCart(book, user.id);
        this.changeTotalCartItems();
    };

    handleModalOpen = (selectedBook: BookModel) => {
        const {modalOpen, selectBook} = this.props;
        selectBook(selectedBook);
        modalOpen();
    };

    handleConfirmOpen = (selectedBook: BookModel) => {
        const {dialogOpen, selectBook} = this.props;
        selectBook(selectedBook);
        dialogOpen();
    };

    handleModalClose = () => {
        const {modalClose} = this.props;
        modalClose();
    };

    handleConfirmClose = () => {
        const {dialogClose} = this.props;
        dialogClose();
    };

    changeTotalCartItems(): void {
        const {changeTotalCartItems, carts, user} = this.props;
        if (user.id in carts) {
            changeTotalCartItems(carts[user.id].reduce((p: number, c: CartItemModel) => p + c.quantity, 0));
        }
    }

    handleBookDelete = (book: BookModel) => {
        const {deleteBook} = this.props;
        deleteBook(book.id);
        this.handleConfirmClose();
        toast.success('Book has been deleted successfully');
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {books, modal, user, dialog, book} = this.props;
        const activeBooks = books.filter((book: BookModel) => !book.deleted);

        return (
            <Container style={{padding: 20}}>
                <Grid item xs={12} container spacing={4} justify='center'>
                    {activeBooks.map((book: BookModel) => (
                        <BookTile selectedBook={book}
                                  key={book.id}
                                  userRole={user.role}
                                  onBookDelete={this.handleConfirmOpen}
                                  onModalOpen={this.handleModalOpen}
                                  addToCart={this.handleAddToCart}/>
                    ))}
                </Grid>
                <BookInfoDialogContainer open={modal}
                                         onClose={this.handleModalClose}/>
                <ConfirmDialog open={dialog}
                               onClose={this.handleConfirmClose}
                               dialogTitle='Remove book'
                               data={book}
                               dialogText={'Do you really want to delete ' + book.title + '?'}
                               onConfirm={this.handleBookDelete}/>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        books: state.books,
        book: state.book,
        carts: state.carts,
        modal: state.modal,
        dialog: state.dialog
    }
};

const mapDispatchToProps = {
    booksFetched,
    deductBookQuantity,
    addBookToCart,
    changeTotalCartItems,
    modalOpen,
    modalClose,
    selectBook,
    deleteBook,
    dialogOpen,
    dialogClose
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
