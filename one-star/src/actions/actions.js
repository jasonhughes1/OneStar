import firebase, { auth, provider } from '../firebase.js';
import apikey from './../apiKey.js';

export const handleRegister = (user) => {
  return {
    type: 'REGISTER',
    user
  };
};

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
};

export const register = (email, password, name) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => dispatch(handleRegister(Object.assign({}, {
        id: response.uid,
        email: response.email,
        name: name
      }))))
      // .catch(error => console.log('error ', error))
      .catch(error => alert(error));
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
      .catch(error => alert(error));
  };
};


export const logout = () => {
  return dispatch => {
    firebase.auth().signOut()
      .then(response => dispatch(handleLogin({})))
      .catch(error => alert(error.message));
  };
};


export const searchAll = searchResults => {
  console.log('results in action ', searchResults);
  return {
    type: 'SEARCH_ALL',
    searchResults
  };
};


export const searchReviews = (business, location) => {

  return dispatch => {
    const proxyUrl = 'https://galvanize-cors-proxy.herokuapp.com/';
    const targetUrl = `https://api.yelp.com/v3/businesses/search?term=${business}&location=${location}`;

    fetch(proxyUrl + targetUrl, {
      method: 'GET',
      headers: {
        "authorization": "Bearer 6zk1vjZX2-OTB4N284fqInN4CP53m8hQnN8OeLDFrlzg8VkeuxEAAb2jpZVBqloXy9JTVzbaYdEKzbApuqbqRSpzPSNuEFPoKSzrEpyZntbr0YQwRxzN-M2MaR3yWXYx",
      },
    }).then(response => response.json())
    //   .then(response => console.log("response: ", response.businesses))
    .then(response => {

      console.log(response);
      dispatch(searchAll(response.businesses))})
      .catch(err => alert('search reviews catch'))

    };
  };
//   export const reviewsList = () => {
//     return dispatch => {
//   const proxyUrl = 'https://galvanize-cors-proxy.herokuapp.com/';
//   const bizID = response.businesses[0].id
//   fetch(proxyUrl + `https://api.yelp.com/v3/businesses/${bizID}/reviews`, {
//     headers: {
//       "authorization": "Bearer 6zk1vjZX2-OTB4N284fqInN4CP53m8hQnN8OeLDFrlzg8VkeuxEAAb2jpZVBqloXy9JTVzbaYdEKzbApuqbqRSpzPSNuEFPoKSzrEpyZntbr0YQwRxzN-M2MaR3yWXYx",
//     }
//   })
//   .then(response => response.json())
//   .then( data => dispatch(searchAll(data.reviews)))
//
//   .catch(err => alert('the fetch didnt work'))
//   }
// }
