import React from 'react';
import './WeatherOne.css'

class WeatherOne extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div className="wthr1day">
            <p className="day">{this.props.wData.}</p>
            <img
              className="wthrIco"
              src="https://openweathermap.org/img/w/10d.png"
              alt="weather icon"
            />
            <div className="temphl">
              <span className="tehigh">58</span>
              <span className="telow">61</span>
            </div>
          </div>
        );
    }
}

export default WeatherOne;