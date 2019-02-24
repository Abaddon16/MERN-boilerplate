import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {counters: []};// sets local state
    // binds all the functions to `this` context
    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);
    this._modifyCounter = this._modifyCounter.bind(this);
  }

  componentDidMount() {// on mount, get the current DB data, set the local state to that
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({counters: json});
      });
  }
  /**
   * Create a new Counter object
   * Gets the new object via `POST`, adds it to the local state, and React takes care of it later
   */
  newCounter() {// on-click, adds new counter to local state; React later pushes to DB via `POST`
    fetch('/api/counters', { method: 'POST' })// in counters.js, this api w/ POST returns a new Counter object
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);//json here is a new counter object/component/thing, pushing adds a new counter
        this.setState({counters: data});// React will later rectify the difference
      });
  }
  /**
   * Increment the `count` value of the Counter
   * @param {*} index 
   */
  incrementCounter(index) {
    const id = this.state.counters[index]._id;
    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {this._modifyCounter(index, json);});
  }
  /**
   * Decrement the `count` value of the Counter
   * @param {*} index 
   */
  decrementCounter(index) {
    const id = this.state.counters[index]._id;
    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {this._modifyCounter(index, json);});
  }
  /**
   * Delete the Counter
   * @param {*} index 
   */
  deleteCounter(index) {
    const id = this.state.counters[index]._id;
    fetch(`/api/counters/${id}`, { method: 'DELETE' })
      .then(_ => {this._modifyCounter(index, null);});
  }
  /**
   * Internal function for use to modify the clicked button's data
   * Can `Update` and `Delete` based on value of `data` (`data=null: Delete`)
   * @param {*} index 
   * @param {*} data 
   */
  _modifyCounter(index, data) {
    let prevData = this.state.counters;
    if (data) prevData[index] = data;
    else prevData.splice(index, 1);
    this.setState({counters: prevData});
  }
  /**
   * Renders the app counter-by-counter (`map(i)`) as fragments (`<>`) to be pushed back up the `App` component
   * Binds all the onclick functions of the buttons to their relative function above
   */
  render() {
    return (
      <>
        <p>Counters:</p>
        <ul>
          { this.state.counters.map((counter, i) => (
            <li key={i}>
              <span>{counter.count} </span>
              <button onClick={() => this.incrementCounter(i)}>+</button>
              <button onClick={() => this.decrementCounter(i)}>-</button>
              <button onClick={() => this.deleteCounter(i)}>x</button>
            </li>
          )) }
        </ul>
        <button onClick={this.newCounter}>New counter</button>
      </>
    );
  }
}

export default Home;
