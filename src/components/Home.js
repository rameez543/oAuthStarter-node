import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
  render() {
    return (
        <div>
        <a href={'https://github.com/login/oauth/authorize?client_id=d75218aec263ad3edfb0&redirect_uri=http://localhost:8000/oauth/redirect'}>Login with Github</a>
        </div>
    );
  }
}

export default Home;