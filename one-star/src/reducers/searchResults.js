const searchResults = (state = [], action) => {
  console.log(action.searchResults);
  switch (action.type) {
  case 'SEARCH_ALL':
    // return [...state, action.searchResults];
    return action.searchResults;
  default:
    return state;
  }
};

export default searchResults;
