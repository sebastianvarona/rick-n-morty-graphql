import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  show: boolean;
  characterId: number | null;
}

const initialState: ModalState = {
  show: false,
  characterId: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    setCharacterId: (state, action: PayloadAction<number>) => {
      state.characterId = action.payload;
    },
  },
});

export const { openModal, setCharacterId } = modalSlice.actions;

export default modalSlice.reducer;
