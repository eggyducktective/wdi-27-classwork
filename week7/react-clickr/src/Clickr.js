import React, { Component } from 'react';

class Clickr extends Component {

  constructor(props){
    super(props); // Calls Component.constructor(props)
    console.log('new Clickr component object created:', this.props);

    // initialize the state object for this component
    this.state = {
      clicks: 0
    };

    // Fix the value of 'this' inside _incrementClicks to be the same
    // current value of 'this' as it is right now, inside constructor()
    // ( ie the current object which is an instace of the Clickr class)

    this._incrementClicks = this._incrementClicks.bind(this);

  }
  _incrementClicks(){
    console.log('_incrementClicks: ', this);
    // console.log('clicks before setState', this.state.clicks);

    const newClicks = this.state.clicks + 1;
    this.setState({
      clicks: newClicks // this update happens asynchronously
    });

    this.props.everyClick(newClicks); // actually calls maybeEraseHistory() in the parent

    // console.log('clicks after setState', newClicks); // can't rely on this.state.clicks being updated
  }

  render(){
    return (
      <button onClick={ this._incrementClicks }> {this.state.clicks} clicks so far </button>
    );
  }
}


export default Clickr;
