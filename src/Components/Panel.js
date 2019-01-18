import React from "react";
import cloud from "../images/cloud.png";
import rain from "../images/rain.png";
import sun from "../images/sun.png";

const Panel = props => {
  const { location, temp, tempUnit, currTempMin, currTempMax, currMain, currDesc } = props.coorddata;

  const emojiChoice = {
    Clouds: cloud,
    Drizzle: rain,
    Sun: sun,
    Rain: rain
  };

  let emoji;
  if (emojiChoice[currMain] === undefined) {
    emoji = emojiChoice.Sun;
  } else {
    emoji = emojiChoice[currMain];
  }
  
  


  return <div className="panel">
      <h2>{location}</h2>
      <img className="emoji" src={emoji} alt="weather emoji" />
      <p className="panelItem"> Outlook: {currMain}</p>
      <p className="panelItem"> Description: {currDesc}</p>
      <p className="panelItem"> Temp: {!temp ? '-' : props.formatTemp(temp)}</p>
      <p className="panelItem"> 
        Temp min: {!currTempMin? '-' : props.formatTemp(currTempMin)}
      </p>
      <p className="panelItem"> 
      Temp max: {!currTempMax ? '-' : props.formatTemp(currTempMax)}
      </p>
    <button className="changeTemp" onClick={props.changeTempUnit}>{tempUnit ? 'Fahrenheit' : 'Celcius'}</button>
    </div>;
};

export default Panel;
