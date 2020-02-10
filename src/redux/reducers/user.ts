import { ActionModel } from '../../base/action.model';

export const user = (state = [], action: ActionModel) => {
  switch (action.type) {
    case 'USER_CHANGED':
      return action.user;
    default:
      return state
  }
};
