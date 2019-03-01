/*
 * Authored by: Abaddon16
 * Document Function: Main app component, takes in children componenets and they insert themselves as components
 */
import events from 'events';
import React, { Component } from 'react';
import CreatureInput from './CreatureInput_comp';

class Creature extends Component {
	constructor(props) {
		super(props);
		this.state = { things: [] };
		this.newCreature = this.newCreature.bind(this);
		this.updateCreatureList = this.updateCreatureList.bind(this);
	}
	componentDidMount() {
		this.updateCreatureList()
	}
	newCreature(name) {
		fetch(`/api/creatures/${name}/`, { method: 'POST' })
			.then(res => res.json())
		this.updateCreatureList();
	}
	updateCreatureList() {
		fetch('/api/creatures')
			.then(res => res.json())
			.then(json => {
				this.setState({ things: json });
			});
	}
	render() {
		return (
			<>
				<p>Creatures:</p>
				<ul>
					{this.state.things.map((thing, i) => (
						<li key={i}>
							<span>{thing.name} </span>
						</li>
					))
					}
				</ul>
				<CreatureInput newCreature={this.newCreature} />
			</>
		);
	}
}

export default Creature;