import React from 'react';
import './WeatherBox.css';
import WeatherOne from './WeatherOne';
import moment from 'moment';


const wData = [
  {
    coord: { lon: -0.13, lat: 51.51 },
    weather: [
      {
        id: 300,
        main: "Drizzle",
        description: "light intensity drizzle",
        icon: "09d"
      }
    ],
    base: "stations",
    main: {
      temp: 280.32,
      pressure: 1012,
      humidity: 81,
      temp_min: 279.15,
      temp_max: 281.15
    },
    visibility: 10000,
    wind: { speed: 4.1, deg: 80 },
    clouds: { all: 90 },
    dt: 1485789600,
    sys: {
      type: 1,
      id: 5091,
      message: 0.0103,
      country: "GB",
      sunrise: 1485762037,
      sunset: 1485794875
    },
    id: 2643743,
    name: "London",
    cod: 200
  }
];

let formattedWData = {};

const CtoF = tempC => ((1.8 * tempC) + 32);

const FtoC = tempF => ((32 - tempF)/1.8);

const KtoC = tempK =>  tempK -  273.15;


function parseDates(unixtime) {
    let date = new Date(unixtime);
    return date.toLocaleString('en-GB', { timeZone: 'UTC' });
}

function parseOWData(data1) {
  console.log(data1);

    // Day of Week
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(data1.dt);
    let dayNum = date.getDay();
    let day = weekDays[dayNum];
    formattedWData["dayy"] = day;
    console.log(date, dayNum, day);
    
    // WeatherIcon
    let iconID = data1.weather[0].icon;
    const iconURL =`https://openweathermap.org/img/w/${iconID}.png`;
    formattedWData["icon"] = iconURL;


    // Temperature - High and Low
    let temp_highC = KtoC(data1.main.temp_max);
    let temp_lowC = KtoC(data1.main.temp_min);
    formattedWData["temp_max"] = temp_highC;
    formattedWData["temp_min"] = temp_lowC;
    
    console.log(formattedWData);
    // return formattedWData;

    this.setState({
      formattedWData
    })
}



class WeatherBox extends React.Component {
    constructor(props) {
        super(props)

        this.state= {
            formattedWData: {
                dayy: '',
                icon: '',
                temp_high: '',
                temp_low: ''
            }
        }
        // this.updateData = this.updateData.bind(this)
    }

    // updateData() {
    //     this.setState({
    //         formattedWData
    //     })
    // }
 
    render() {
        return (
            <div>
                <div className="today">{parseDates(Date.now())}</div>
                <div className="wthr5days">
                    <WeatherOne wData={this.state.formattedWData}/>
                    <WeatherOne />
                    <WeatherOne />
                    <WeatherOne />
                    <WeatherOne />
                </div>
            </div>
        );
    }
}

export default WeatherBox;