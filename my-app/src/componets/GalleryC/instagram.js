import React, { Component } from 'react';
import Instafeed from 'instafeed.js';
import './instagram.css'

class InstagramFeed extends Component {
  componentDidMount() {
    const userFeed = new Instafeed({
      get: 'user',
      target: 'instafeed-container',
      resolution: 'standard_resolution',
      accessToken: 'IGQWROTmUwdzNkNHJVQWpfRGZANLWg3M3RrMUJoY1JuUGJpQ3kyR0cwVUxVZAFpsR2JzTVlZAQ012RVV3cndVbzlsbHN4WkxRV3c4dkx5WEo5elhSaEZAkVTc4NDZAvV0NlT0VIeHVjYndRanBJZAHdobmhQaS1INC1sSUEZD', // Replace with your access token
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
