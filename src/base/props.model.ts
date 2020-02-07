import UserModel from './user.model';
import { BookModel } from './book.model';
import { CartModel } from './cart.model';

export default interface PropsModel {
    contacts: UserModel[];
    contactsFetched: (contacts: UserModel[]) => {};
    user: UserModel;
    userChanged: (user: UserModel) => {};
    books: BookModel[];
    booksFetched: (books: BookModel[]) => {};
    carts: CartModel;
    addBookToCart: (book: BookModel) => {};
    [key: string]: any;
}
