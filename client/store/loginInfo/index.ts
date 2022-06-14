import { createSlice } from '@reduxjs/toolkit';

export interface UserState {}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;

export default userSlice.reducer;
