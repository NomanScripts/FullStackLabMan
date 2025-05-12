import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  status: string[];
  tags: string[];
  category: string[];
  difficulty: string[];
  xp: string[];
}

const initialState: FiltersState = {
  status: [],
  tags: [],
  category: [],
  difficulty: [],
  xp: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action: PayloadAction<{ filterType: keyof FiltersState; value: string }>) => {
      const { filterType, value } = action.payload;
      const currentFilters = state[filterType];
      if (currentFilters.includes(value)) {
        state[filterType] = currentFilters.filter(f => f !== value);
      } else {
        state[filterType].push(value);
      }
    },
    clearFilters: () => initialState,
    setXpFilter: (state, action: PayloadAction<string[]>) => {
      state.xp = action.payload;
    },
  },

});

export const { toggleFilter, clearFilters, setXpFilter } = filtersSlice.actions;

export const selectFilters = (state: { filters: FiltersState }) => state.filters;

export default filtersSlice.reducer;

export type { FiltersState };
