import React, {Component} from 'react'
import Table from './WorldClockTable'

// method to convert milliseconds to time
const msToTime = (duration) => {
  var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

// const msToDate = (duration) => {
// 	let date = new Date(duration)
// 	return date.toString("MM/dd")
// }

const today = new Date();
const time = today.getTime();
let taipei_time = time + (8*60*60*1000);
let newyork_time = time - (5*60*60*1000);
let tokyo_time = time + (9*60*60*1000);
let london_time = time + (0*60*60*1000);

class WorldClock extends Component {

	constructor(props) {		
		super(props);
		this.state = {
			locations: [
				{location: 'Taipei', time: msToTime(taipei_time)},
				{location: 'New York', time: msToTime(newyork_time)},
				{location: 'Tokyo', time: msToTime(tokyo_time)},
				{location: 'London', time: msToTime(london_time)},
			],
			time: new Date().toLocaleString(),
		};		
	}
	componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      const today = new Date();
	  const time = today.getTime();
	  let taipei_time = time + (8*60*60*1000);
	  let newyork_time = time - (5*60*60*1000);
	  let tokyo_time = time + (9*60*60*1000);
	  let london_time = time + (0*60*60*1000);
      this.setState({
        locations: [
			{location: 'Taipei', time: msToTime(taipei_time)},
			{location: 'New York', time: msToTime(newyork_time)},
			{location: 'Tokyo', time: msToTime(tokyo_time)},
			{location: 'London', time: msToTime(london_time)},
		],
      });
    }
	render (){
		return (
			<div className='container'>
				<h1>World Clock Table</h1>
				<Table locationData={this.state.locations} />
			</div>
		)
	}
}

export default WorldClock;


