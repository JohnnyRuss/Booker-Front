import { createContext, useReducer } from 'react';

const SearchState = {
  destination: '',
  date: {},
  minPrice: '',
  maxPrice: '',
  adult: '',
  children: '',
  room: '',
};

export const SearchContext = createContext({
  ...SearchState,
  dispatchSearch: ({ action, payload }) => {},
});

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      const temp = {};
      Object.keys(action.payload).forEach((key) => (temp[key] = action.payload[key]));
      return { ...state, ...temp };

    case 'RESET_SEARCH':
      return SearchState;

    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [searchState, dispatchSearch] = useReducer(searchReducer, SearchState);

  return (
    <SearchContext.Provider
      value={{
        dispatchSearch,
        ...searchState,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
