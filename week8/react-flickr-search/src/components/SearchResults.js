import React, {Component} from 'react';
import SearchForm from './SearchForm';
import jsonp from 'jsonp-es6';

import { Link } from 'react-router-dom';


const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

class Gallery extends Component
  return(
    <div className="results">

      {
        props.images.map( url => <img src={url} key={url} /> )
      }
    </div>
  );
};

class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    };
    // this.fetchImages = this.fetchImages.bind(this);

    this.fetchImages(this.props.match.params.query);
  }

  fetchImages(query) {
    console.log('fetchImages(): ', query);

    const generateURL = p => {
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
    }

    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: 'API key here',
      text: query,
      format: 'json'
    };

    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'})
    .then(data => {
      console.log('AJAX response: ', data);

      // const urls = data.photos.photo.map( generateURL );

      // console.log(urls);

      this.setState({images: data.photos.photo});

    });

    // jQuery flashback:
    // $.ajax(URL, {option})
    // .done(function(data){
    //   console.log(data);
    // });
  }

  render(){
    return(
      <div>
        <h1>Search Results</h1>
        <Gallery images={this.state.images} history={this.props.history}/>

      </div>
    );
  }

}

export default SearchResults;
