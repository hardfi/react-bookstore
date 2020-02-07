import { ActionModel } from '../../base/action.model';

export const orders = (state: any = [], action: ActionModel) => {
    switch (action.type) {
        case 'ADD_ORDER':
            state.push(action.order);
            return state;
        case 'REMOVE_ORDER':
            state.splice(action.order);
            return state;
        default:
            return state
    }
};
