import { CartItemModel } from './cart-item.model';

export interface CartModel {
    [key: string]: CartItemModel[];
}
