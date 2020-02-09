import UserModel from './user.model';
import { BookModel } from './book.model';
import { CartModel } from './cart.model';
import { OrderModel } from './order.model';
import { ORDER_STATUSES } from './order-statuses.model';

export interface StateProps {
    users: UserModel[];
    user: UserModel;
    books: BookModel[];
    book: BookModel;
    carts: CartModel;
    orders: OrderModel[];
    session: boolean;
    total: number;
    modal: boolean;
    dialog: boolean;
}

export interface DispatchProps {
    usersFetched: (users: UserModel[]) => {};
    userChanged: (user: UserModel) => {};
    sessionChange: (session: boolean) => void;
    booksFetched: (books: BookModel[]) => {};
    selectBook: (book: BookModel) => {};
    deductBookQuantity: (bookId: string) => {};
    addBookQuantity: (bookid: string) => {};
    changeBookDetails: (book: BookModel) => {};
    deleteBook: (bookId: string) => {};
    addBookToCart: (book: BookModel, userId: number) => {};
    removeBookFromCart: (book: BookModel, userId: number) => {};
    clearCart: (userId: number) => {};
    changeTotalCartItems: (total: number) => {};
    addOrder: (order: OrderModel) => {};
    changeOrderStatus: (orderId: string, status: ORDER_STATUSES) => {};
    modalOpen: () => {};
    dialogOpen: () => {};
    modalClose: () => {};
    dialogClose: () => {};
}
