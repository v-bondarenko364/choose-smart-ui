import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userReducer from './slices/user';

const reducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
