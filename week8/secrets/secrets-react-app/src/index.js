import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Secrets from './components/Secrets';

ReactDOM.render(<Secrets />, document.getElementById('root'));
registerServiceWorker();
