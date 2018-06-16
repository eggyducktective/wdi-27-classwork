import React, {Component} from 'react';
import axios from 'axios';
import SecretsForm from './SecretsForm';

import '../App.css';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {
  constructor(){
    super();

    this.state = {
      secrets: []
    }
    this.saveSecret = this.saveSecret.bind(this);
  }

  componentWillMount(){
    // Can make initial AJAX request here, but this happens before the first render()
  }

// this will run AFTER the component mounts and has been done a render() once
componentDidMount(){
  // this will run AFTER the component mounts and has done a render() once
  const fetchSecrets = () => {
  axios.get(SERVER_URL).then( response => {
    console.log('response:', response.data);
    this.setState({ secrets: response.data.reverse() });
   });
  };

fetchSecrets();
// setInterval(fetchSecrets, 1000);
}

saveSecret( secret ){
  console.log('Secret.js -> saveSecret():', secret);

  // POST secret data to server via Ajax
  axios.post(SERVER_URL, { content: secret })
  .then( response => {
    console.log('response:', response, this.state);
    this.setState({ secrets: [response.data.secret, ...this.state.secrets] })
  })
}

  render(){
    return(
      <div className="App">
        <h1>Tell us your secrets</h1>
        <SecretsForm reportSecret={ this.saveSecret }/>
        {
          this.state.secrets.length && this.state.secrets.map( s => <p key={ s.id }>{ s.content }</p> )
        }
      </div>
    );
  }

}

export default Secrets;
