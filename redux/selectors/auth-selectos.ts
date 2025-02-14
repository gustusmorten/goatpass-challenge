// selectors for auth state
import { RootState } from '../store';
export const selectAuth = (state: RootState) => state.auth;

export const isAutehnticatedSelector = (state: RootState) => {
    return !!state.auth.token;
}

export const getTokentSelector = (state: RootState) => {
    return state.auth.token;
}