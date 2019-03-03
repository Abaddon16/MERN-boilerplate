/*
 * Authored by: Abaddon16
 * Document Function: Main app component, takes in children componenets and they insert themselves as components
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreatureInput from './CreatureInput_comp';

class Creature extends Component {
	constructor(props) {
		super(props);
		this.state={things: []};
		this.newCreature=this.newCreature.bind(this);
		this.updateCreatureList=this.updateCreatureList.bind(this);
	}
	componentDidMount() {
		this.updateCreatureList()
	}
	newCreature(creature) {
		fetch(`/api/creatures/${creature.name}/`,
			{
				method: 'POST',
				body: JSON.stringify(creature),//! needs to be defined the same as the `/models/Creatures.js` model
				headers: {"Content-Type": "application/json"}
			})
			.then(res => res.json())
		this.updateCreatureList();
	}
	updateCreatureList() {
		fetch('/api/creatures')
			.then(res => res.json())
			.then(json => {
				this.setState({things: json});
			});
	}
	render() {
		return (
			<>
				<p>Creatures:</p>
				<ul>
					{this.state.things.map((thing, i) => (
						<li key={i}> <Link to={`/creatures/`+thing._id} params={{id: thing._id}}>{thing.name}</Link></li>
					))
					}
				</ul>
				<CreatureInput newCreature={this.newCreature} />
			</>
		);
	}
}

export default Creature;