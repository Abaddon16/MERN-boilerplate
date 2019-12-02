import React, {Component} from 'react';
import 'whatwg-fetch';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state={counters: []};
		// binds the functions to the current context, so that the `this` inside those functions will always be used as expected
		this.newCounter=this.newCounter.bind(this);
		this.incrementCounter=this.incrementCounter.bind(this);
		this.decrementCounter=this.decrementCounter.bind(this);
		this.deleteCounter=this.deleteCounter.bind(this);
		this._modifyCounter=this._modifyCounter.bind(this);
	}

	componentDidMount() {// on the component being mounted to the page, do this
		fetch('/api/counters')//HTTP GET request to this path, defined in /routes/api/counters.js
			.then(res => res.json())
			.then(json => {
				this.setState({counters: json});// set the state to the database's returned data
			});
	}
	newCounter() {
		fetch('/api/counters', {method: 'POST'})// designated a POST request
			.then(res => res.json())
			.then(json => {
				let data=this.state.counters;
				data.push(json);
				this.setState({counters: data});
			});
	}
	incrementCounter(index) {
		const id=this.state.counters[index]._id;
		fetch(`/api/counters/${id}/increment`, {method: 'PUT'})
			.then(res => res.json())
			.then(json => {this._modifyCounter(index, json);});
	}
	decrementCounter(index) {
		const id=this.state.counters[index]._id;
		fetch(`/api/counters/${id}/decrement`, {method: 'PUT'})
			.then(res => res.json())
			.then(json => {this._modifyCounter(index, json);});
	}
	deleteCounter(index) {
		const id=this.state.counters[index]._id;
		fetch(`/api/counters/${id}`, {method: 'DELETE'})
			.then(_ => {this._modifyCounter(index, null);});
	}
	_modifyCounter(index, data) {
		let prevData=this.state.counters;
		if (data) prevData[index]=data;
		else prevData.splice(index, 1);
		this.setState({counters: prevData});
	}
	/**
	 * Renders the app counter-by-counter (`map(i)`) as a fragment (`<>`) to be pushed back up the `App` component
	 * Binds all the onclick functions of the buttons to their relative function above
	 */
	render() {
		return (
			<>
				<p>Counters:</p>
				<ul>
					{this.state.counters.map((counter, i) => (
						<li key={i}>{/* key needed for React to be able to manage it's internal virtual DOM, must be unique among siblings */}
							<span>{counter.count} </span>
							<button onClick={() => this.incrementCounter(i)}>+</button>
							<button onClick={() => this.decrementCounter(i)}>-</button>
							<button onClick={() => this.deleteCounter(i)}>x</button>
						</li>
					))}
				</ul>
				<button onClick={this.newCounter}>New counter</button>
			</>
		);
	}
}

export default Home;
