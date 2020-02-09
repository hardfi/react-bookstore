import { ActionModel } from '../../base/action.model';

export const users = (state = [], action: ActionModel) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return [
        ...action.users
      ];
    default:
      return state
  }
};
