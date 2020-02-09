import { CartItemModel } from './cart-item.model';
import UserModel from './user.model';

export interface OrderModel {
    id: string;
    date: number | Date;
    status: string;
    books: CartItemModel[];
    total: string;
    user: UserModel;
}
