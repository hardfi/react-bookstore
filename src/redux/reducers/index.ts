import { combineReducers } from 'redux';
import { contacts } from './contacts';
import { user } from './user';
import { session } from './session';
import { books } from './books';
import { carts } from './carts';
import { total } from './total';
import { orders } from './orders';
import { modal } from './modal';
import { book } from './book';

export default combineReducers({
    user,
    contacts,
    session,
    books,
    book,
    carts,
    total,
    orders,
    modal
});
