import React, { Component } from 'react';
import WeatherMap from '../Components/WeatherMap';
import Panel from '../Components/Panel';

class Current extends Component {
    render() {
        return (
            
                <div className="grid">
                    <WeatherMap coorddata={this.props.state} />
                <div className="panelCurrent">
                    <Panel
                        
                        coorddata={this.props.state}
                        changeTempUnit={this.props.changeTempUnit}
                        formatTemp={this.props.formatTemp}
                    />
                    </div>
                    
                </div> 
        );
    }
}

export default Current;