import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


class Maps extends Component {


  render() {
    const mapStyles = {
      width: '50%',
      height: '50%'
    }
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={6}
          initialCenter={{ lat: 40.444, lng: -115.176 }}
          styles={mapStyles}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(Maps);
