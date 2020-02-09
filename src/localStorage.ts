import StateModel from './base/state.model';
import {loaderState$} from './App'

const initialStoreState = {
    users: [],
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

export const saveState = async (state: StateModel) => {
    try {
        loaderState$.next(true);
        await timeout(1000);
        loaderState$.next(false);
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
