import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { BookModel } from '../base/book.model';

export function BookTile(props: any) {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            img: {
                maxWidth: '100%',
            },
            header: {
                margin: '2px 0'
            }
        }),
    );

    const handleBookDialogOpen = (selectedBook: BookModel) => {
        const {onModalOpen} = props;
        onModalOpen(selectedBook);
    };

    const {selectedBook} = props;
    const classes = useStyles();

    return (
        <Grid container item xs={4} sm={3} md={2} justify='space-between' direction='column'>
            <Grid onClick={() => handleBookDialogOpen(selectedBook)} className='cursor-pointer'>
                <img src={selectedBook.book_cover} alt={selectedBook.title} className={classes.img}/>
                <h4 className={classes.header}>{selectedBook.title}</h4>
                <h5 className={classes.header}>{selectedBook.author}</h5>
            </Grid>
            <Grid container item direction='column'>
                <Grid container item alignItems='center' justify='space-between'>
                    <span>{'\u20AC' + selectedBook.price}</span>
                    <h6 className={classes.header}>Q: {selectedBook.quantity}</h6>
                    <IconButton color="primary"
                                aria-label="add to shopping cart"
                                onClick={() => props.addToCart(selectedBook)}
                                disabled={selectedBook.quantity < 1}>
                        <AddShoppingCartIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
