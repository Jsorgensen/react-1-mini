import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: '',
      friendsList: []
    }
  }
  updateState(key, value){
    this.setState({
      [key]: value
    })
  }
  addFriend(friend){
    this.setState({
      friends: [...this.state.friends, {picture: this.state.picture, name: this.state.name}],
      picture: '',
      name: '',
    })
  }
  render() {
    const friends = this.state.friends.map(
      friend => 
      <div>
        <img width='300px' src={friend.picture} alt={friend.picture + ', Not Found'}></img>
        <span>{friend.name}</span>
      </div>
    )
    return (
      <div className="App">
        Picture:
        <input onChange={(e)=>this.updateState('picture', e.target.value)} value={this.state.picture}/>
        Name:
        <input onChange={(e)=>this.updateState('name', e.target.value)} value={this.state.name}/>
        <button onClick={(e)=>this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
