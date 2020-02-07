import { ActionModel } from '../../base/action.model';
import StateModel from '../../base/state.model';

export const total = (state: number = 0, action: ActionModel) => {
    switch (action.type) {
        case 'CHANGE_TOTAL_CART_ITEMS':
            return action.total;
        default:
            return state
    }
};
