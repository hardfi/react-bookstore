import { ActionModel } from '../../base/action.model';

export const contacts = (state = [], action: ActionModel) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_SUCCESS':
      return [
        ...action.contacts
      ];
    default:
      return state
  }
};
