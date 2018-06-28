
import axios from 'axios';
const CREDENTIALS = 'client_id=4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9';
const GitHub = {
  getUserInfo( username ){
    return axios.get(`https://api.github.com/users/${ username }?${ CREDENTIALS }`);
  },
  getUserRepos( username ){
    return axios.get(`https://api.github.com/users/${ username }/repos?${ CREDENTIALS }`);
  }
};
export default GitHub;

// cant talk to the promise?, cant do .then
// getUserInfo: function
// getUserRepos - different API request
