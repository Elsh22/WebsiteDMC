import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './instagram.css'

class InstagramFeed extends Component {
  componentDidMount() {
    const userFeed = new Instafeed({
      get: 'user',
      target: 'instafeed-container',
      resolution: 'standard_resolution',
      accessToken: 'IGQWRQTi1udFpzMHpMOGdyeXZACd1lia2tKTUZAnVTh3SjZAadDhteXZAoVTM3anlILW5ieTF6MXJadHpCcW9DR0lkNGFyNjJJOGNMOWVTOUdfTG45YkxOQ3RpOG96US1YQ01JenItb2o0YkJRVEJzZAUdHMVFGaDItOTAZD', // Replace with your access token
      template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();
  }

  render() {
    return (
      <div>
        <div id="instafeed-container"></div>
      </div>
    );
  }
}

export default InstagramFeed;
