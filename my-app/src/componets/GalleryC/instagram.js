import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './instagram.css'

class InstagramFeed extends Component {
  componentDidMount() {
    const userFeed = new Instafeed({
      get: 'user',
      target: 'instafeed-container',
      resolution: 'standard_resolution',
      accessToken: 'cant post here', // Replace with u8your access token
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
