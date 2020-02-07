import StateModel from './base/state.model';
const initialStoreState = {
    contacts: [],
    user: '',
    session: false,
    carts: {},
    total: 0,
    orders: [],
    books: []
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return initialStoreState;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return initialStoreState;
    }
};

export const saveState = (state: StateModel) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};
