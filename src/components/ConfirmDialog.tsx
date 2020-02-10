import React from 'react';
import {
  Button, Dialog, DialogContent, DialogTitle, Grid,
} from '@material-ui/core';
import { DispatchProps, StateProps } from '../base/props.model';
import { BookModel } from '../base/book.model';

interface ParentProps {
  onClose: () => void,
  open: boolean,
  dialogTitle: string,
  dialogText: string,
  onConfirm: (book: BookModel) => void,
  data: any;
}

type Props = StateProps & DispatchProps & ParentProps;

export default function ConfirmDialog(props: Props) {
  const {
    onClose, open, dialogTitle, dialogText, onConfirm, data,
  } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open} maxWidth='xs'>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <Grid container item xs={12}>
          <Grid container item className='py-4'>{dialogText}</Grid>
          <Grid container item justify='space-between' className='py-3'>
            <Button variant='contained' color='secondary' onClick={onClose}>Cancel</Button>
            <Button variant='contained' color='primary' onClick={() => onConfirm(data)}>Confirm</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
