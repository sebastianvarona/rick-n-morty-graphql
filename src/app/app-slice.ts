import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Character, Characters } from './types';

export interface AppState {
  page: number;
  data: Characters | null;
  favouriteCharacter: Character | null;
  history: string[];
}

const initialState: AppState = {
  page: 1,
  data: null,
  favouriteCharacter: null,
  history: [],
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
    setFavouriteCharacter: (state, action: PayloadAction<Character>) => {
      state.favouriteCharacter = action.payload;
    },
    addCharacterToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
  },
});

export const {
  incrementPage,
  decrementPage,
  setData,
  setFavouriteCharacter,
  addCharacterToHistory,
} = appSlice.actions;

export default appSlice.reducer;
