import { CartItemModel } from './cart-item.model';

export interface OrderModel {
    id: string;
    date: number | Date;
    status: string;
    books: CartItemModel[];
    total: string;
}
