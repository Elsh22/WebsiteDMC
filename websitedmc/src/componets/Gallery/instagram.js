import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './instagram.css'

class InstagramFeed extends Component {
  componentDidMount() {
    const userFeed = new Instafeed({
      get: 'user',
      target: 'instafeed-container',
      resolution: 'standard_resolution',
      accessToken: 'IGQVJXR3MxWnZApaXJ4eTBtY0xnU2N5SmRTbkZA0RjVGQXE5OXUzaUVtX1pLTmpQRkJ2WnF1RlNqZA01FdFFBMzlqUmNXX0RoeFNGdnRWWmNfSlBlcE9jNXVvSWpWSmxnUmJtV2MzNnUwYk92NXRJOHlYTwZDZD', // Replace with your access token
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
