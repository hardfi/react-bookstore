import { ActionModel } from '../../base/action.model';

export const book = (state: any = {}, action: ActionModel) => {
    console.log('action');
    console.log(action);
    switch (action.type) {
        case 'SELECT_BOOK':
            return action.book;
        default:
            return state
    }
};
