import React, { Component } from 'react';
import Clickr from './Clickr';

class HistoryEraser extends Component {

  constructor(){
    super();

    this.state = {
      historyStillExists: true
    };
    this.maybeEraseHistory = this.maybeEraseHistory.bind(this);
  }

    maybeEraseHistory(clickCount){
      console.log('maybeEraseHistory(): ', clickCount);

      if( clickCount === 4){
        this.setState({historyStillExists: false});
      }
    }


  render(){
    const bannerColor = this.state.historyStillExists ? '#ccc' : 'red';
    return(
      <div style={ {backgroundColor: bannerColor} }>
        <h1>HISTORY ERASER BUTTON</h1>
        <Clickr everyClick={ this.maybeEraseHistory } />
        {
          this.state.historyStillExists ? <h1> All is well</h1> : <h1> FOOL, DONT DO IT </h1>
        }
      </div>
    );
  }
}

export default HistoryEraser;
