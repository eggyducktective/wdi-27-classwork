import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
class App extends Component {
  constructor(){
    super();
    this.state = {
      profiles: [
        {name: 'Grant', age: 25, imageHeight: 200, bio: 'I once shot a man in my dream'},
        {name: 'Bill', age: 67, imageHeight: 400, bio: 'No gods no masters'}
      ]
    };
  }
  render(){
    return(
      <div className="App">
      {
        this.state.profiles.map( p => <Profile
          key={p.name}
          name={p.name}
          a={p.age}
          bio={p.bio}
          imageHeight={p.imageHeight}/> )}
    </div>

    );
  }
}

  // render() {
  //   return (
  //     <div className="App">
  //       <Profile
  //       name="Grant Hanrahan"
  //       age="25"
  //       imageHeight="200"
  //       bio="I once shot a man in my dream"
  //       />
  //       <Profile
  //       name="Bill Murray"
  //       age="67"
  //       imageHeight="400"
  //       bio="No gods no masters"
  //       />
  //     </div>




export default App;
