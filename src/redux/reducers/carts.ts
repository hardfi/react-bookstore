import { ActionModel } from '../../base/action.model';
import { CartItemModel } from '../../base/cart-item.model';

export const carts = (state: any = [], action: ActionModel) => {
    const {userId, book} = action;
    switch (action.type) {
        case 'ADD_BOOK_TO_CART':
            const addBook = () => {
                const bookInCartIndex = state[userId].findIndex((bk: CartItemModel) => {
                    return bk.id === book.id;
                });
                if (bookInCartIndex >= 0) {
                    state[userId][bookInCartIndex].quantity += 1;
                } else {
                    state[userId].push({id: book.id, quantity: 1, price: book.price} as CartItemModel)
                }
            };
            if (userId in state) {
                addBook();
            } else {
                state[userId] = [];
                addBook();
            }
            return state;
        case 'REMOVE_BOOK_FROM_CART':
            const userCart = state[userId];
            const bookInCartIndex = userCart.findIndex((bk: CartItemModel) => {
                return bk.id === book.id;
            });
            if (userCart[bookInCartIndex].quantity === 1) {
                userCart.splice(bookInCartIndex, 1);
            } else {
                userCart[bookInCartIndex].quantity -= 1;
            }
            return state;
        case 'CLEAR_CART':
            delete state[userId];
            return state;
        default:
            return state
    }
};
