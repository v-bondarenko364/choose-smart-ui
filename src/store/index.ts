import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
  FLUSH,
} from 'redux-persist';

import authReducer from './slices/general';

const authPersistConfig = {
  key: 'general',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  general: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
