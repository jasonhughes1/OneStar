import firebase, { auth, provider } from '../firebase.js';
import apikey from './../apiKey.js';

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
      .catch(error => alert('Email and password not valid'))
  };
};

export const handleLogin = (user) => {
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
//
// export const searchReviews = () => {
//   debugger;
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const targetUrl = 'http://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco';
//
//   fetch(proxyUrl + targetUrl, {
//     method: 'GET',
//     headers: {
//       "authorization": "Bearer 6zk1vjZX2-OTB4N284fqInN4CP53m8hQnN8OeLDFrlzg8VkeuxEAAb2jpZVBqloXy9JTVzbaYdEKzbApuqbqRSpzPSNuEFPoKSzrEpyZntbr0YQwRxzN-M2MaR3yWXYx",
//     },
//     }).then(response => response.json())
//       .then((parsedResponse) => (searchAll(console.log('this is the parsed response: ', parsedResponse))))
//       .catch(err => alert('the fetch didnt work'))
//   }

  export const searchReviews = () => {
    // debugger;
    return dispatch => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco/reviews';

    fetch(proxyUrl + targetUrl, {
      method: 'GET',
      headers: {
        "authorization": "Bearer 6zk1vjZX2-OTB4N284fqInN4CP53m8hQnN8OeLDFrlzg8VkeuxEAAb2jpZVBqloXy9JTVzbaYdEKzbApuqbqRSpzPSNuEFPoKSzrEpyZntbr0YQwRxzN-M2MaR3yWXYx",
      },
      }).then(response => response.json())
        .then(response => dispatch(searchAll(response)))

        .catch(err => alert('the fetch didnt work'))
    }
  }
