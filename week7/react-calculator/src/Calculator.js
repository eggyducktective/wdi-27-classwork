import React, { PureComponent } from 'react';

// const Calculator = function(props){
//
// };

class Calculator extends PureComponent {

  constructor(props){
    super(props); {/* run constructer() of the parent class*/}
    this.state = {
      a: 0,
      b: 0
    };

    {/* .bind return a new function, the value of this will be fixed as the value of it, at current state */}
    this._updateA = this._updateA.bind(this)
    this._updateB = this._updateB.bind(this)
  }


  _updateA(event){
    // console.log('_updateA(): ', event.target.value);
    // this.state.a = event.target.value -> naughty
    const a = parseFloat(event.target.value || 0);
    //CALLING this.state will TRIGGER the render() method
    this.setState({a});
  }
  _updateB(event){
    // console.log('_updateB: ', event.target.value);
    const b = parseFloat(event.target.value || 0);
    this.setState({b});
  }

  render(){
    console.log('render()', this.state);

    {/*const a = this.state.a
    const b = this.state.b*/}

    //ES 6 destructuring

    const {a, b} = this.state;

    return(
      <div>
        <h1>Calculator</h1> {/* _ is an event handler */}
        {/* _ ES6 feature { (e) => this._updateA(e) } */}
        <input type="number" onChange={ this._updateA } />
        <input type="number" onChange={ this._updateB } />

        <h2>Results</h2>
        <p>{a} + {b} = {a + b}</p>
        <p>{a} - {b} = {a - b}</p>
        <p>{a} * {b} = {a * b}</p>
        <p>{a} / {b} = {a / b}</p>
        <p>{a} ** {b} = {a ** b}</p>
      </div>
    );
  }
} // class Calculator


export default Calculator;
