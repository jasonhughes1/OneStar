export const login = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {};
    case 'REGISTER':
      return action.user;
    default:
      return state;
  }
}

export const user = (state = null, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
}

// export default login;
