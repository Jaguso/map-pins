import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Maps.css'

class Maps extends Component {
  state = {
    google: null,
    stores: [
      { lat: 47.49855629475769, lng: -122.14184416996333 },
      { latitude: 47.359423, longitude: -122.021071 },
      { latitude: 47.2052192687988, longitude: -121.988426208496 },
      { latitude: 47.6307081, longitude: -122.1434325 },
      { latitude: 47.3084488, longitude: -122.2140121 },
      { latitude: 47.5524695, longitude: -122.0425407 }
    ]
  }

  componentDidMount() {
    this.setState({ google: this.props.google })
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }


  render() {
    const mapStyles = {
      position: 'relative',
      width: '50%',
      height: '50%',
    }
    return (
      <div className="maps-container">
        <p>sdoijf</p>
        <p>sodif</p>
        <Map
          google={this.state.google}
          zoom={6}
          initialCenter={{ lat: 40.444, lng: -115.176 }}
          styles={mapStyles}
        >
          {this.displayMarkers()}
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(Maps);
