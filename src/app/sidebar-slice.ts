import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  show: boolean;
}

const initialState: ModalState = {
  show: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
  },
});

export const { openSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
