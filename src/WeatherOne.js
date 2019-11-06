import React from 'react';
import './WeatherOne.css'

class WeatherOne extends React.Component {

    render() {
        return (
          <div className="wthr1day">
            <p className="day">{this.props.formattedWData.day}</p>
            <img
              className="wthrIco"
              src={this.props.formattedWData.icon}
              alt="weather icon"
            />
            <div className="temphl">
              <span className="tehigh">{this.props.formattedWData.temp_max}</span>
              <span className="telow">{this.props.formattedWData.temp_min}</span>
            </div>
          </div>
        );
    }
}

export default WeatherOne;