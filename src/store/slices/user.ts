import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import type { User } from '../types/user';
// import type { UpdateSubscriptionPayload, UpdateUserPayload } from '@/lib/api';
// import { api } from '@/lib/api';
// import { loginWithVendor, logout } from './auth';
// import { endOfDay, isBefore } from 'date-fns';

type UserState = {
  profile: User | null;
  isLoading: boolean;
};

const initialState: UserState = {
  profile: null,
  isLoading: false,
};

export const STATE_KEY = 'user';

// export const updateUser = createAsyncThunk<User, Partial<UpdateUserPayload>>(
//   `${STATE_KEY}/updateUser`,
//   async (payload, { rejectWithValue }) => {
//     try {
//       return await api.updateUser(payload);
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   },
// );

// export const deleteUser = createAsyncThunk(
//   `${STATE_KEY}/deleteUser`,
//   async (_, { rejectWithValue }) => {
//     try {
//       return await Promise.race([api.logout(), api.deleteUser()]);
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   },
// );

// export const updateSubscription = createAsyncThunk(
//   `${STATE_KEY}/updateSubscription`,
//   async (payload: UpdateSubscriptionPayload, { rejectWithValue }) => {
//     try {
//       return await api.updateSubscription(payload);
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   },
// );

const userSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    setUser: (state, action: { payload: User | null }) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
    //   .addCase(loginWithVendor.fulfilled, (state, action) => {
    //     state.profile = action.payload.user;
    //     state.isLoading = false;
    //   })
    //   .addCase(loginWithVendor.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(loginWithVendor.rejected, (state) => {
    //     state.profile = null;
    //     state.isLoading = false;
    //   })
    //   .addCase(updateUser.fulfilled, (state, action) => {
    //     state.profile = action.payload;
    //     state.isLoading = false;
    //   })
    //   .addCase(updateUser.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteUser.fulfilled, (state) => {
    //     state.profile = null;
    //     state.isLoading = false;
    //   })
    //   .addCase(deleteUser.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateSubscription.fulfilled, (state, action) => {
    //     state.profile = action.payload;
    //     state.isLoading = false;
    //   })
    //   .addCase(updateSubscription.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateSubscription.rejected, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(logout.fulfilled, (state) => {
    //     state.profile = null;
    //     state.isLoading = false;
    //   });
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state: RootState) => state[STATE_KEY].profile;

export const getUserLoading = (state: RootState) => state[STATE_KEY].isLoading;

export default userSlice.reducer;
