import React from 'react';
import {
  Button, Dialog, DialogContent, Grid, TextField, Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { USER_ROLE } from '../base/user-role.model';
import { BookModel } from '../base/book.model';
import { changeBookDetails } from '../redux/actions';
import { DispatchProps, StateProps } from '../base/props.model';
import StateModel from '../base/state.model';

interface ParentProps {
  onClose: () => void;
  open: boolean;
}

class LocalState {
  title?: string;
  id?: string;
  author?: string;
  quantity?: number;
  price?: string;
  description?: string;
}

type Props = StateProps & DispatchProps & ParentProps;

class SimpleDialog extends React.Component<Props, LocalState> {
  constructor(props: Props) {
    super(props);
    this.state = new LocalState();
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.book && nextProps.book.id !== prevState.id) {
      const {
        title, id, author, quantity, price, description,
      } = nextProps.book as BookModel;
      return {
        title, id, author, quantity, price, description,
      };
    }
    return null;
  }

  handleInputChange = (event: React.ChangeEvent<{ value: string, name: string }>) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    } as Pick<LocalState, keyof LocalState>);
  };

  handleSaveChanges = () => {
    const { onClose, changeBookDetails } = this.props;
    changeBookDetails(this.state as BookModel);
    toast.success('Book details have been edited successfully');
    onClose();
  };

  render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal |
    boolean | null | undefined {
    const {
      onClose,
      open,
      book,
      user,
    } = this.props;

    const {
      title,
      author,
      quantity,
      price,
      description,
    } = this.state;

    return (
      <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open} fullWidth maxWidth='md'>
        <DialogContent>
          <Grid container item xs={12} direction='row' wrap='nowrap' className='py-3'>
            <img src={book.book_cover} alt={book.title} />
            {user.role === USER_ROLE.client && (
              <Grid container item justify='center' direction='column' className='px-4'>
                <Typography variant='h5'>{book.title}</Typography>
                <Typography variant='h6'>{book.author}</Typography>
                <Typography variant='body1'>{book.description}</Typography>
              </Grid>
            )}
            {user.role === USER_ROLE.admin
            && (
              <Grid container item justify='center' direction='column' className='px-4'>
                <Grid container item direction='column'>
                  <TextField
                    label='Book title'
                    name='title'
                    size='small'
                    className='my-2'
                    value={title}
                    onChange={this.handleInputChange}
                    variant='outlined'
                  />
                  <TextField
                    label='Book author'
                    name='author'
                    size='small'
                    className='my-2'
                    value={author}
                    onChange={this.handleInputChange}
                    variant='outlined'
                  />
                  <TextField
                    label='Available pieces'
                    type='number'
                    name='quantity'
                    size='small'
                    className='my-2'
                    value={quantity}
                    onChange={this.handleInputChange}
                    variant='outlined'
                  />
                  <TextField
                    label='Price'
                    name='price'
                    size='small'
                    className='my-2'
                    value={price}
                    onChange={this.handleInputChange}
                    variant='outlined'
                  />
                  <TextField
                    label='Description'
                    name='description'
                    size='small'
                    className='my-2'
                    multiline
                    rows='4'
                    value={description}
                    onChange={this.handleInputChange}
                    variant='outlined'
                  />
                </Grid>
                <Grid container item justify='space-between'>
                  <Button variant='contained' color='secondary' onClick={onClose}>Cancel</Button>
                  <Button variant='contained' color='primary' onClick={this.handleSaveChanges}>Save changes</Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: StateModel) => ({
  book: state.book,
  user: state.user,
});

const mapDispatchToProps = { changeBookDetails };

export const BookInfoDialogContainer = connect(mapStateToProps, mapDispatchToProps)(SimpleDialog);
