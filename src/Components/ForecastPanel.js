import React from 'react';
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import sun from '../images/sun.png';
import { format } from 'path';

const ForecastPanel = (props) => {

    const { Day, Outlook, Description, Temp, Max, Min, changeTempUnit, tempUnit, formatTemp } = props;

    const emojiChoice = {
        Clouds: cloud,
        Drizzle: rain,
        Sun: sun,
        Rain: rain
    };
    
    let emoji;
    if (emojiChoice[Outlook] === undefined) {
        emoji = emojiChoice.Sun;
    } else {
        emoji = emojiChoice[Outlook];
    }

    
 
    return <div className="panel">
        {Day ? <h2>{Day}</h2> : <h2>Day</h2>}
        <img className="emoji" src={emoji} alt="weather emoji" />
        <p className="panelItem"> Outlook: {Outlook}</p>
        <p className="panelItem"> Description: {Description} </p>
        <p className="panelItem"> Temp: {!Temp ? '-' : formatTemp(Temp)}</p>
        <p className="panelItem">Temp min:{!Max ? '-' : formatTemp(Max)}</p>
        <p className="panelItem">Temp max:{!Min ? '-' : formatTemp(Min)}</p>
        <button className="changeTemp" onClick={changeTempUnit}>
          {tempUnit ? 'Fahrenheit' : 'Celcius'}
        </button>
      </div>;
};

export default ForecastPanel;