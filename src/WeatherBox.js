import React from 'react';
import './WeatherBox.css';

class WeatherBox extends React.Component {
 

    render() {
        return (
            <div>
                <div className="today">{Date.now()}</div>
                <div className="w5box">
                    <div className="w1box">
                        <p className="day">Wed</p>
                        <img src="https://openweathermap.org/img/w/11d.png" alt="weather icon"/>
                        <span>78</span>
                        <span>67</span>
                    </div>
                    <div className="w1box">
                        <p>Wed</p>
                        <img src="https://openweathermap.org/img/w/10d.png" alt="weather icon"/>
                        <div className="temphl">
                            <span>78</span>
                            <span>67</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherBox;