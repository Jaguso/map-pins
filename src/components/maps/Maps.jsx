import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Maps.css'

class Maps extends Component {
  state = {
    google: null
  }

  componentDidMount() {
    this.setState({ google: this.props.google })
  }


  render() {
    console.log(this.state)
    const mapStyles = {
      width: '100%',
      height: '100%',
      backgroundColor: 'blue'
    }
    return (
      <div >
        <p>sdoijf</p>
        <p>sodif</p>
        <div >
          <Map
            google={this.state.google}
            zoom={6}
            initialCenter={{ lat: 40.444, lng: -115.176 }}
            styles={mapStyles}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_MAPS
})(Maps);
