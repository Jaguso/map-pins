import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class Maps extends Component {


  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={6}
          initialCenter={{ lat: 40.444, lng: -115.176 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(Maps);
