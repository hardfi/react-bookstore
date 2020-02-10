import UserModel from '../../base/user.model';
import { BookModel } from '../../base/book.model';
import { OrderModel } from '../../base/order.model';
import { ORDER_STATUSES } from '../../base/order-statuses.model';

export const usersFetched = (users: UserModel[]) => ({
  type: 'FETCH_USERS_SUCCESS',
  users
});

export const userChanged = (user: UserModel) => ({
  type: 'USER_CHANGED',
  user
});

export const sessionChange = (session: boolean) => ({
  type: 'SESSION_CHANGE',
  session
});

export const booksFetched = (books: BookModel[]) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  books
});

export const selectBook = (book: BookModel) => ({
  type: 'SELECT_BOOK',
  book
});

export const deductBookQuantity = (bookId: string) => ({
  type: 'DEDUCT_BOOK_QUANTITY',
  bookId
});

export const addBookQuantity = (bookId: string) => ({
  type: 'ADD_BOOK_QUANTITY',
  bookId
});

export const changeBookDetails = (book: BookModel) => ({
  type: 'CHANGE_BOOK_DETAILS',
  book
});

export const deleteBook = (bookId: string) => ({
  type: 'DELETE_BOOK',
  bookId
});

export const addBookToCart = (book: BookModel, userId: number) => ({
  type: 'ADD_BOOK_TO_CART',
  book,
  userId
});

export const removeBookFromCart = (book: BookModel, userId: number) => ({
  type: 'REMOVE_BOOK_FROM_CART',
  book,
  userId
});

export const clearCart = (userId: number) => ({
  type: 'CLEAR_CART',
  userId
});

export const changeTotalCartItems = (total: number) => ({
  type: 'CHANGE_TOTAL_CART_ITEMS',
  total
});

export const addOrder = (order: OrderModel) => ({
  type: 'ADD_ORDER',
  order
});

export const changeOrderStatus = (orderId: string, status: ORDER_STATUSES) => ({
  type: 'ORDER_STATUS_CHANGE',
  status,
  orderId
});

export const modalOpen = () => ({
  type: 'MODAL_OPEN',
});

export const modalClose = () => ({
  type: 'MODAL_CLOSE',
});

export const dialogOpen = () => ({
  type: 'DIALOG_OPEN',
});

export const dialogClose = () => ({
  type: 'DIALOG_CLOSE',
});
