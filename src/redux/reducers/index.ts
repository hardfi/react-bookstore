import { combineReducers } from 'redux';
import { users } from './users';
import { user } from './user';
import { session } from './session';
import { books } from './books';
import { carts } from './carts';
import { total } from './total';
import { orders } from './orders';
import { modal } from './modal';
import { book } from './book';
import { dialog } from './dialog';

export default combineReducers({
    user,
    users,
    session,
    books,
    book,
    carts,
    total,
    orders,
    modal,
    dialog
});
