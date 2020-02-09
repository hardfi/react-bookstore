import { ActionModel } from '../../base/action.model';

export const dialog = (state: boolean = false, action: ActionModel) => {
    switch (action.type) {
        case 'DIALOG_OPEN':
            return true;
        case 'DIALOG_CLOSE':
            return false;
        default:
            return state
    }
};
