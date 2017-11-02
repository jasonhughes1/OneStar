const user = (state = null, action) => {
  switch (action.type) {
  case 'REGISTER':
    return action.user;
  case 'LOGIN':
    return action.user;
  default:
    return state;
  }
};

export default user;
