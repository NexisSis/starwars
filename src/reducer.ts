import { createSlice } from '@reduxjs/toolkit'
import { PeoplesResponse } from './types';

const DEFAULT_PAGE = 1;
const DEFAULT_SEARCH = '';
const DEFAULT_PEOPLES: PeoplesResponse = {
  count: 0,
  results: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    peoples: DEFAULT_PEOPLES,
    page: DEFAULT_PAGE,
    search: DEFAULT_SEARCH,
  },
  reducers: {
    setPeoples: (state, action) => {
      state.peoples = action.payload;
    },
    setPeople: (state, action) => {
      const index = state.peoples.results.findIndex(item => item.url === action.payload.url);

      if (index !== -1) {
        state.peoples.results[index] = action.payload;
      } else {
        state.peoples.results.push(action.payload);
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = DEFAULT_PAGE;
    },
  },
});

export const { setPeoples, setSearch, setPage, setPeople } = mainSlice.actions;

export default mainSlice.reducer
