import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Characters } from './types';

export interface AppState {
  page: number;
  data: Characters | null;
}

const initialState: AppState = {
  page: 1,
  data: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
    setData: (state, action: PayloadAction<Characters>) => {
      state.data = action.payload;
    },
  },
});

export const { incrementPage, decrementPage, setData } = appSlice.actions;

export default appSlice.reducer;
