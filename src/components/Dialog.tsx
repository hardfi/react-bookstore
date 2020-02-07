import React from 'react';
import { Dialog, DialogContent, Grid, Typography } from '@material-ui/core';
import StateModel from '../base/state.model';
import { connect } from 'react-redux';

function SimpleDialog(props: any) {
    const {onClose, open, book} = props;

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth='md'>
            <DialogContent>
                <Grid container item xs={12} direction='row' wrap='nowrap' className='py-3'>
                    <img src={book.book_cover} alt={book.title}/>
                    <Grid container item justify='center' direction='column' className='px-4'>
                        <Typography variant='h5'>{book.title}</Typography>
                        <Typography variant='h6'>{book.author}</Typography>
                        <Typography variant='body1'>{book.description}</Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

const mapStateToProps = (state: StateModel) => {
    return {
        book: state.book
    }
};

export const SimpleDialogContainer = connect(mapStateToProps)(SimpleDialog);
