import React from 'react';
import './WeatherOne.css'

class WeatherOne extends React.Component {

    render() {
        console.log("W1: Props", this.props);
        return (
          <div className="wthr1day">
            <p className="days">{this.props.dayy}</p>
            <img
              className="wthrIco"
              src={this.props.icon}
              alt="weather icon"
            />
            <div className="temphl">
              <span className="tehigh">{this.props.temp_max}</span>
              <span className="telow">{this.props.temp_min}</span>
            </div>
          </div>
        );
    }
}

export default WeatherOne;