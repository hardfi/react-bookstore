import * as React from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import StateModel from '../base/state.model';
import {
    addBookToCart,
    booksFetched,
    changeTotalCartItems,
    deductBookQuantity,
    modalClose,
    modalOpen,
    selectBook
} from '../redux/actions';
import { BookModel } from '../base/book.model';
import { CartItemModel } from '../base/cart-item.model';
import { SimpleDialogContainer } from '../components/Dialog';
import { BookTile } from '../components/BookTile';

class Home extends React.Component<any, []> {
    password: string = '';
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
        const min = 20;
        const max = 60;
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    handleAddToCart = (book: BookModel) => {
        const {deductBookQuantity, addBookToCart, user} = this.props;
        deductBookQuantity(book.id);
        addBookToCart(book, user.id);
        this.changeTotalCartItems();
    };

    handleModalClose = () => {
        const {modalClose} = this.props;
        modalClose();
    };

    handleModalOpen = (selectedBook: BookModel) => {
        const {modalOpen, selectBook} = this.props;
        selectBook(selectedBook);
        modalOpen();
    };

    changeTotalCartItems(): void {
        const {changeTotalCartItems, carts, user} = this.props;
        if (user.id in carts) {
            changeTotalCartItems(carts[user.id].reduce((p: number, c: CartItemModel) => p + c.quantity, 0));
        }
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {books, modal} = this.props;

        return (
            <Container style={{padding: 20}}>
                <Grid item xs={12} container spacing={4} justify='center'>
                    {books.map((book: BookModel) => (
                        <BookTile selectedBook={book}
                                  key={book.id}
                                  onModalOpen={this.handleModalOpen}
                                  addToCart={this.handleAddToCart}/>
                    ))}
                </Grid>
                <SimpleDialogContainer open={modal} onClose={this.handleModalClose}/>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModel) => {
    return {
        user: state.user,
        books: state.books,
        carts: state.carts,
        modal: state.modal
    }
};

const mapDispatchToProps = {
    booksFetched,
    deductBookQuantity,
    addBookToCart,
    changeTotalCartItems,
    modalOpen,
    modalClose,
    selectBook
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
