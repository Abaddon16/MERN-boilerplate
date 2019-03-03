import React, {Component} from 'react';
import 'whatwg-fetch';

class CreatureInput extends Component {
	constructor(props) {
		super(props);
		this.state={};
		this.newCreature=props.newCreature;
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleNumChange=this.handleNumChange.bind(this);
	}

	handleChange(event) {
		this.setState({[event.target.id]: event.target.value});
	}
	handleNumChange(event) {
		if (!isNaN(event.target.value)) this.setState({[event.target.id]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.newCreature(this.state);
		this.setState(prevState => {for (var i in prevState) prevState[i]='';});
	}
	createSubTable(values, inputType, maxLength, size, onChangeFunc, name) {
		let table=[];
		for (let val of values) {
			let children=[];
			children.push(<td key={val+"_label"}>{<label htmlFor={name+"."+val}>{val}: </label>}</td>);
			children.push(<td key={val+"_input"}>{<input type={inputType} maxLength={String(maxLength)} size={String(size)} id={name+"."+val} value={this.state[name+"."+val]||''} onChange={onChangeFunc} />}</td>);
			table.push(<tr key={val}>{children}</tr>);
		}
		return (<table><tbody>{table}</tbody></table>);
	}
	createFormTable() {
		let fields={
			name: "text",
			type: "text",
			size: "text",
			legacy: "text",
			legacy_value: "text",
			description: "textarea",
			habitat: "textarea",
			additional_info: "textarea",
			attributes: this.createSubTable(['STR', 'AGI', 'END', 'INT', 'PER', 'CHM'], 'text', 3, 4, this.handleNumChange, 'attributes'),
			protection: this.createSubTable(['acid', 'cold', 'electricity', 'poison', 'space', 'arcane', 'curse', 'fire', 'shadow', 'time', 'celestial', 'disease', 'mind', 'sonic'],
				'text', 3, 4, this.handleNumChange, 'protection'),
			resistance: this.createSubTable(['light', 'dark', 'change', 'calling', 'elements'], 'text', 3, 4, this.handleNumChange, 'resistance')
		}
		let table=[];
		for (let field in fields) {
			let children=[];
			if (fields[field]=='text') {
				children.push(<td key={field+"_label"}>{<label htmlFor={field}>{field}: </label>}</td>);
				children.push(<td key={field+"_input"}>{<input type='text' id={field} value={this.state[field]||''} onChange={this.handleChange} />}</td>);
				table.push(<tr key={field}>{children}</tr>)
			}
			else if (fields[field]=='textarea') {
				children.push(<td key={field+"_label"}>{<label htmlFor={field}>{field}: </label>}</td>);
				children.push(<td key={field+"_input"}>{<textarea id={field} value={this.state[field]||''} onChange={this.handleChange} />}</td>);
				table.push(<tr key={field}>{children}</tr>)
			}
			else {
				children.push(<td key={field+"_label"}>{field}</td>);
				children.push(<td key={fields+"_data"}>{fields[field]}</td>);
				table.push(<tr key={field}>{children}</tr>);
			}
		}
		return table;
	}
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit} autoComplete="off" id="creature_form">
					<table border="1">
						<tbody>
							{this.createFormTable()}
							<tr><td key="submit"><input type="submit" value="Submit" /></td></tr>
						</tbody>
					</table>
				</form>
			</>
		);
	}
}

export default CreatureInput;