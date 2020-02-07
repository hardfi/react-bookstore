import { ActionModel } from '../../base/action.model';

export const session = (state = [], action: ActionModel) => {
    switch (action.type) {
        case 'SESSION_CHANGE':
            return action.session;
        default:
            return state
    }
};
