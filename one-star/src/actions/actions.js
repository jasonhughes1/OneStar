import firebase, { auth, provider } from '../firebase.js';
// import apikey from '../apikey.js'

export const handleRegister = (user) => {
  return {
    type: 'REGISTER',
    user
  };
};


export const register = (email, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => dispatch(handleRegister(Object.assign({}, {
        id: response.uid,
        email: response.email
      }))))
      .catch(error => console.log(error))
  };
};

export const handleLogin = user => {
  return {
    type: 'LOGIN',
    user
  };
};

export const login = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => dispatch(handleLogin(Object.assign({}, {
        id: response.uid,
        email: response.email
      }))))
      .catch(error => alert('Email and password not found, please try again!'));
  };
};


export const searchAll = searchResults => {
  return {
    type: 'SEARCH_ALL',
    searchResults
  };
};
