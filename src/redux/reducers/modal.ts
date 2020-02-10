import { ActionModel } from '../../base/action.model';

export const modal = (state: boolean = false, action: ActionModel) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return true;
        case 'MODAL_CLOSE':
            return false;
        default:
            return state
    }
};
