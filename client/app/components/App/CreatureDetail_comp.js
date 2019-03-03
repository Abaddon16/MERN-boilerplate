import React, {Component} from 'react';
import 'whatwg-fetch';

class CreatureDetail extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.id=props.match.params.id;
    }
    componentDidMount() {
        this.updateInfo();
    }
    updateInfo() {
        fetch(`/api/creatures/${this.id}`)
            .then(res => res.json())
            .then(json => {this.setState(json)});
    }
    createDisplayTable(values, name) {
        let table=[];
        for (let val in values) {
            let children=[];
            children.push(<td key={val+"_label"}>{<label htmlFor={name+"."+val}>{val}: </label>}</td>);
            children.push(<td key={val+"_input"}>{<input type='text' readOnly id={name+"."+val} value={this.state[name][val]} />}</td>);
            table.push(<tr key={val}>{children}</tr>);
        }
        return (<tbody>{table}</tbody>);
    }
    render() {
        if (!this.state.name) return null;
        return (
            <>
                <h1>{this.state.name}</h1>
                <p>Legacy: {this.state.legacy}</p>
                <p>Size: {this.state.size}</p>
                <table border="1">{this.createDisplayTable(this.state.protection, "protection")}</table>
                <br />
                <table border="1">{this.createDisplayTable(this.state.resistance, "resistance")}</table>
            </>
        );
    }
}
export default CreatureDetail;