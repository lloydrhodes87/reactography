import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import cloud from "../images/cloud.png";
import rain from "../images/rain.png";
import sun from "../images/sun.png";

export default class WeatherMap extends Component {
  state = {
    zoom: 6
  };

  render() {
    const emojiChoice = {
      Clouds: cloud,
      Drizzle: rain,
      Sun: sun,
      Rain: rain
    };

    const { lat, lon, location, currMain } = this.props.coorddata;
    const position = [lat, lon];

    return (
      <Map center={position} zoom={this.state.zoom} height="300px">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup className="popup">
            <p>
              Location:
              <br />
              {location}
            </p>
            <img
              className="emoji"
              src={emojiChoice[currMain]}
              alt="weather emoji"
            />
          </Popup>
        </Marker>
      </Map>
    );
  }
}
