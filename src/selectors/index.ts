import { RootState } from '../store';
import { createSelector } from 'reselect'

export const selectPeoples = (state: RootState) => state.main.peoples;
export const selectSearch = (state: RootState) => state.main.search;
export const selectPage = (state: RootState) => state.main.page;

export const selectParameters = createSelector(
    selectSearch,
    selectPage,
    (search, page) => {
       return {
           search,
           page,
       }
    }
);
