import { ActionModel } from '../../base/action.model';
import { OrderModel } from '../../base/order.model';

export const orders = (state: any = [], action: ActionModel) => {
    const {order, status, orderId} = action;
    switch (action.type) {
        case 'ADD_ORDER':
            state.push(order);
            return state;
        case 'REMOVE_ORDER':
            state.splice(order);
            return state;
        case 'ORDER_STATUS_CHANGE':
            const selectedOrder = state.find((ordr: OrderModel) => ordr.id === orderId);
            selectedOrder.status = status;
            return state;
        default:
            return state
    }
};
