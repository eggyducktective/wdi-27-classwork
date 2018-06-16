import React, {Component} from 'react';

class SecretsForm extends Component {
  // need props to get a call back, tell the parent what's in the form
  constructor(props){
    super(props);

    this.state = {
      content: ''
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit(event){
    // prevent page from submitting
    event.preventDefault();
    //POST to server
    // console.log(this.state.content);
    this.props.reportSecret(this.state.content);
    // actually calls saveSecret() in Secrets component

  }

  _handleChange(event){
    // Get the content of what people are typing.
    // console.log(event.target.value);
    this.setState({content: event.target.value})
  }

  render(){
    return(
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange }></textarea>
        <br />
        <input type="submit" value="Spill your guts" />
      </form>
    );
  }
}

export default SecretsForm;
