import UserModel from './user.model';
import { BookModel } from './book.model';
import { CartModel } from './cart.model';
import { OrderModel } from './order.model';

export default interface StateModel {
    users: UserModel[];
    user: UserModel;
    session: boolean;
    books: BookModel[];
    book: BookModel;
    carts: CartModel;
    total: number;
    orders: OrderModel[];
    modal: boolean;
    dialog: boolean;
}
