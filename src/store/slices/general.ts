import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ApiClient } from '@/lib/api';

import type { RootState } from '../index';
import { CreateDecisionPayload, LoginVendorPayload, User } from '../types';

type AuthState = {
  loading: boolean;
  user: User | null;
  error: string | null;
};

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

export const STATE_KEY = 'general';

export const loginWithVendor = createAsyncThunk<{ user: User }, LoginVendorPayload>(
  `${STATE_KEY}/loginWithVendor`,
  async (credentials, { rejectWithValue }) => {
    try {
      return await ApiClient.loginWithVendor(credentials);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const logout = createAsyncThunk(`${STATE_KEY}/logout`, async (_, { rejectWithValue }) => {
  try {
    return await ApiClient.logout();
  } catch (error) {
    console.error('Error during logout:', error);

    return rejectWithValue((error as Error).message);
  }
});

export const createDecision = createAsyncThunk(
  `${STATE_KEY}/createDecision`,
  async (decision: CreateDecisionPayload, { rejectWithValue }) => {
    try {
      return await ApiClient.createDecision(decision);
    } catch (error) {
      console.error('Error during create decision:', error);

      return rejectWithValue((error as Error).message);
    }
  },
);

const authSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    setUser: (state, action: { payload: User | null }) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWithVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithVendor.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(loginWithVendor.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(createDecision.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setUser } = authSlice.actions;

export const getIsAuthenticated = (state: RootState) => !!state[STATE_KEY].user;

export const getIsLoading = (state: RootState) => state[STATE_KEY].loading;

export const getUser = (state: RootState) => state[STATE_KEY].user;

export default authSlice.reducer;
