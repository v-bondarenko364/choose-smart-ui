import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import type { User } from '../types/user';
// import type { LoginVendorPayload } from '../types/auth';
// import { api } from '@/lib/api';

type AuthState = {
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  loading: false,
  error: null,
};

export const STATE_KEY = 'auth';

// export const loginWithVendor = createAsyncThunk<{ user: User; token: string }, LoginVendorPayload>(
//   `${STATE_KEY}/loginWithVendor`,
//   async (credentials, { rejectWithValue }) => {
//     try {
//       return await api.loginWithVendor(credentials);
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   },
// );

// export const logout = createAsyncThunk(`${STATE_KEY}/logout`, async (_, { rejectWithValue }) => {
//   try {
//     return await api.logout();
//   } catch (error) {
//     console.error('Error during logout:', error);

//     return rejectWithValue((error as Error).message);
//   }
// });

const authSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
    //   .addCase(loginWithVendor.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(loginWithVendor.fulfilled, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(loginWithVendor.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload as string;
    //   });
  },
});

export const getIsAuthenticated = (state: RootState) => !!state.user.profile;

// export const getIsLoading = (state: RootState) => state[STATE_KEY].loading;

export default authSlice.reducer;
