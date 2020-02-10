import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { BookModel } from '../base/book.model';
import { USER_ROLE } from '../base/user-role.model';
import { DispatchProps, StateProps } from '../base/props.model';

interface ParentProps {
  onModalOpen: Function;
  onBookDelete: Function;
  addToCart: Function;
  selectedBook: BookModel;
  userRole: USER_ROLE;
}

type Props = StateProps & DispatchProps & ParentProps;

export function BookTile(props: Props) {
  const useStyles = makeStyles(() => createStyles({
    img: {
      maxWidth: '100%',
    },
    header: {
      margin: '2px 0',
    },
  }));

  const handleBookDialogOpen = (selectedBook: BookModel) => {
    const { onModalOpen } = props;
    onModalOpen(selectedBook);
  };

  const { selectedBook, userRole } = props;
  const classes = useStyles();

  return (
    <Grid container item xs={4} sm={3} md={2} justify='space-between' direction='column'>
      <Grid onClick={() => handleBookDialogOpen(selectedBook)} className='cursor-pointer'>
        <img src={selectedBook.book_cover} alt={selectedBook.title} className={classes.img} />
        <h4 className={classes.header}>{selectedBook.title}</h4>
        <h5 className={classes.header}>{selectedBook.author}</h5>
      </Grid>
      <Grid container item direction='column'>
        <Grid container item alignItems='center' justify='space-between'>
          {userRole === USER_ROLE.client && (
            <Grid container item direction='column'>
              <Grid container item justify='space-between' alignItems='center'>
                <span>{`\u20AC${selectedBook.price}`}</span>
                <IconButton
                  color='primary'
                  aria-label='add to shopping cart'
                  onClick={() => props.addToCart(selectedBook)}
                  disabled={selectedBook.quantity < 1}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Grid>
              <Grid className='mt--2'>
                <h6 className={classes.header}>
                  {selectedBook.quantity}
                  {' '}
                  available
                </h6>
              </Grid>
            </Grid>
          )}
          {userRole === USER_ROLE.admin && (
            <Grid container item justify='center'>
              <IconButton
                color='secondary'
                aria-label='remove book'
                onClick={() => props.onBookDelete(selectedBook)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                color='primary'
                aria-label='edit book info'
                onClick={() => handleBookDialogOpen(selectedBook)}
              >
                <EditIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
