import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Maps.css'

class Maps extends Component {
  state = {
    google: null
  }

  componentDidMount() {
    this.setState({ google: this.props.google })
  }

  displayMarkers = () => {

  }


  render() {
    const mapStyles = {
      width: '90%',
      height: '90%',
      backgroundColor: 'blue'
    }
    return (
      <div className="maps-container">
        <p>sdoijf</p>
        <p>sodif</p>
        {/* <div > */}
        <Map
          google={this.state.google}
          zoom={6}
          initialCenter={{ lat: 40.444, lng: -115.176 }}
          styles={mapStyles}
        >
          <Marker position={{ lat: 40.444, lng: -115.176 }} />
        </Map>
        {/* </div> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(Maps);
