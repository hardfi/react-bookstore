import { ActionModel } from '../../base/action.model';
import { BookModel } from '../../base/book.model';

export const books = (state: any = [], action: ActionModel) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return [
                ...action.books
            ];
        case 'DEDUCT_BOOK_QUANTITY':
            return state.map((book: BookModel) => {
                if (book.id === action.bookId) {
                    book.quantity -= 1;
                }
                return book;
            });
        case 'ADD_BOOK_QUANTITY':
            return state.map((book: BookModel) => {
                if (book.id === action.bookId) {
                    book.quantity += 1;
                }
                return book;
            });
        default:
            return state
    }
};
