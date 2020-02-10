import { ActionModel } from '../../base/action.model';

export const book = (state: any = {}, action: ActionModel) => {
    switch (action.type) {
        case 'SELECT_BOOK':
            return action.book;
        default:
            return state
    }
};
