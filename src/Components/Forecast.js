
import ForecastPanel from './ForecastPanel';

import React, { Component } from 'react';

class Forecast extends Component {
    render() {
       
        const  { forecastDataObject, formatTemp, changeTempUnit, tempUnit } = this.props;
       
        

        return <div className="grid panelForecastContainer">

           {    forecastDataObject.map(element => {     
            return <ForecastPanel 
                key={element.Day} 
                className="panelForecast" 
                Day={element.Day} 
                Outlook={element.Outlook}
                Description={element.Description}
                Temp={element.Temperature}
                Min={element.Min}
                Max={element.Max}
                formatTemp={formatTemp}
                changeTempUnit={changeTempUnit}
                tempUnit={tempUnit}
                
            />
           })
                
            }
           
          </div>;
    }
    // getDay = () => {
    //     const { dt } = this.filteredList.props;
         
    // }
}

export default Forecast;

;