import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Components/Search";
import Current from './Components/Current';
import Home from './Components/Home';
import Forecast from './Components/Forecast';
import { Router, Link } from '@reach/router';



class App extends Component {
  state = {
    location: 'location',
    weatherData: [],
    lat: 51.5,
    lon: -0.05,
    main: '',
    temp: '',
    tempUnit: true,
    filteredList: [],
    forecastDataObject: [],
    currTempMin: '',
    currTempMax: '',
    currMain: '',
    currDesc: ''
  
  };
  render() {
    return <div className="App">
        <h1 className="header">Global Weather</h1>
      <div className="navbar">
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/current">
          Current Weather
        </Link>
        <Link className="nav" to="/forecast">
          5 Day Forecast
        </Link>    
    </div>
      <Search updateSearch={this.updateSearch} />
        
        <Router>
          <Home path="/" />
          <Current path="/current" state={this.state} changeTempUnit={this.changeTempUnit} formatTemp={this.formatTemp} />
          <Forecast path="/forecast" forecastDataObject={this.state.forecastDataObject} changeTempUnit={this.changeTempUnit} formatTemp={this.formatTemp} tempUnit={this.state.tempUnit} />
        </Router>
      </div>;
  }

  changeTempUnit = () => {
    this.setState(state => ({
      tempUnit: !state.tempUnit
    }));
  };
  formatTemp = temp => {
    let newTemp;
    if (!this.state.tempUnit) {
      newTemp = (temp - 273.15) * 1.8 + 32;
      return `${Math.floor(newTemp)}°F`;
    } else {
      newTemp = temp;
    }
    return `${Math.floor(newTemp - 273.15)}°C`;
  };

  componentDidUpdate(prevProps, prevState) {
    this.fetchWeatherData().then(dataWeather => {
      this.fetchForecastData().then(forecastData => {
        const { lat, lon } = dataWeather.coord;
        const { temp, temp_min, temp_max } = dataWeather.main;
  
        const { description, main } = dataWeather.weather[0];
        const { list } = forecastData;
        console.log(dataWeather);
        const filteredList = list.filter(element => element.dt_txt.includes('12:00:00'));
        const forecastDataObject = filteredList.reduce((arr, curr) => {          
          arr.push(
            {
              Day: new Date(curr['dt_txt'].replace(/ 12:00:00/, '')).toString().slice(0,3),
              Outlook: curr.weather[0].main,
              Description: curr.weather[0].description,
              Temperature: curr.main.temp,
              Max: curr.main.temp_max,
              Min: curr.main.temp_min

          }
            );
          return arr;
        }, [])
               

        if (this.state.location !== prevState.location) {
          this.setState({
            lat,
            lon,
            temp,
            filteredList,
            forecastDataObject,
            currTempMin: temp_min,
            currTempMax: temp_max,
            currMain: main,
            currDesc: description             
          })
        } 
      })
    })
  }



  fetchWeatherData = async () => {
    try {
      const { location } = this.state;
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8dfe209e2c6bf6698c6df408d5d0c51c`);
      return data;
    } catch (error) {
      console.log(error)
    }
  };

  fetchForecastData = async () => {
    try {
      const { location } = this.state;
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=8dfe209e2c6bf6698c6df408d5d0c51c`);

      return data;
    } catch (error) {
      console.log(error)
    }
  };

  updateSearch = item => {
    this.setState(() => ({
      location: item
    }));
  };
}

export default App;
