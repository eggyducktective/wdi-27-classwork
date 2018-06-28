import React, {Component} from 'react';



class Search extends Component {


  constructor(props){
    super(props);

    this.state = {
      query: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

    }

    _handleChange(e){
      // console.log(e.target.value);
      this.setState({query: e.target.value});
    }

    _handleSubmit(e){
      e.preventDefault();
      console.log(this.state.query);
      // Navigate to Profile component, pasing the search query in the URL
      this.props.history.push(`/details/${this.state.query}`);
      // redirect to 
    }

  render(){
    return(
      <div>
        <h1>Github & Octocatttttttttt; Search<sup>*</sup></h1>
        <h2>Search by Username</h2>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange}/> <button>Search your Octocatttttttttt</button>
        </form>
        <sup>*</sup>($5 each)
      </div>

    );
  }
}

export default Search;
