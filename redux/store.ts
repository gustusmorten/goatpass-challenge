import { configureStore } from '@reduxjs/toolkit';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';
import { authSlice } from './stores/auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  devTools: false,
  enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(devToolsEnhancer()),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch