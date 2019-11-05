import React from 'react';

class WeatherBox extends React.Component {
 

    render() {
        return (
            <div>
                <div className="today"></div>
                <div className="w5box">
                    <div className="w1box">
                        <p>Wed</p>
                        <img />
                        <span>78</span>
                        <span>67</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeatherBox;