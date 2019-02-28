import React, { Component } from 'react';
import 'whatwg-fetch';

class CreatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text_value: ''};
        this.newCreature=props.newCreature;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({text_value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.newCreature(this.state.text_value)
        this.setState({text_value: ''});
    }
  
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.text_value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </>
      );
    }
  }

export default CreatureInput;