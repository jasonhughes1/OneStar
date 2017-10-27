import React, { Component } from 'react';
import './App.css';
import firebase from './../../firebase.js';
import Header from './../Header/Header.js';
import Login from './../Login/Login.js';
import Register from './../Register/Register.js';
import { Route, NavLink, Link } from 'react-router-dom';
import Search from './../Search/Search.js';
import Profile from './../Profile/Profile.js';
import key from './../../key.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // currentItem: '',
      // username: '',
      // items: [],
      user: {
          email: ''
      }
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const itemsRef = firebase.database().ref('items');
  //   const item = {
  //     title: this.state.currentItem,
  //     user: this.state.username
  //   }
  //   itemsRef.push(item);
  //   this.setState({
  //     currentItem: '',
  //     username: ''
  //   });
  // }
  // componentDidMount() {
  //   const itemsRef = firebase.database().ref('items');
  //   itemsRef.on('value', (snapshot) => {
  //     const keyValuePair = Object.entries(snapshot.val());
  //     const items = keyValuePair.map(([key, entryObject]) => Object.assign({id: key,}, entryObject))
  //     this.setState({ items })
  //     // })
  //     // this.setState({
  //     //   items: newState
  //     // });
  //   });
  // }
  // removeItem(itemId) {
  //   const itemRef = firebase.database().ref(`/items/${itemId}`);
  //   itemRef.remove();
  // }


  handleFetch() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = 'http://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco';
      fetch(proxyUrl + targetUrl, {
        "method": "GET",
        "headers": {
            "authorization": "Bearer 6zk1vjZX2-OTB4N284fqInN4CP53m8hQnN8OeLDFrlzg8VkeuxEAAb2jpZVBqloXy9JTVzbaYdEKzbApuqbqRSpzPSNuEFPoKSzrEpyZntbr0YQwRxzN-M2MaR3yWXYx",
        },
      })
      .then(response => console.log(response.json()))
      .catch(err => alert('this didnt work: ', err))
  }

  render() {
    return (
      <div className='app'>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Search} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <button onClick={() => this.handleFetch()}></button>
        {/* <div className='container'>
          <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                  <button>Add Item</button>
                </form>
          </section>
          <section className='display-item'>
              <div className="wrapper">
                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>brought by: {item.user}
                          <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div> */}
      </div>
    );
  }
}
export default App;
