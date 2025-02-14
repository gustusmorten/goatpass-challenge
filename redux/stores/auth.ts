import { getAsync, removeAsync, saveAsync } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    userName: string;
    email: string;
    token: null | string;
}

const storedData = getAsync('auth') as unknown as AuthState;

const initialState: AuthState = {
    userName: storedData?.userName || '',
    email: storedData?.email || '',
    token: storedData?.token || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.token = action.payload.token;
        saveAsync('auth', action.payload);
    },
    logout(state) {
        state.userName = '';
        state.email = '';
        state.token = null;
        removeAsync('auth');
    },
    refreshToken(state, action) {
        state.token = action.payload.token;
    },
  },
});

export  const { login, logout, refreshToken } = authSlice.actions;

export default authSlice;