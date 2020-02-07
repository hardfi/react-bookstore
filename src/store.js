import {createStore} from 'redux';
import reducers from './redux/reducers';
import {loadState, saveState} from './localStorage';

const persistedState = loadState();
export const store = createStore(reducers, persistedState);

store.subscribe(() => {
  console.log('store.getState()');
  console.log(store.getState());
  saveState({
    contacts: store.getState().contacts,
    user: store.getState().user,
    session: store.getState().session,
    books: store.getState().books,
    carts: store.getState().carts,
    total: store.getState().total,
    orders: store.getState().orders
  });
});
