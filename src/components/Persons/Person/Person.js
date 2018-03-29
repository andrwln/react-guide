import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
	constructor(props) {
		// react does this by default, if defining on your own, you must call super.
		// this is useless unless you add additional logic
		super(props);
		console.log('inside person.js constructor method');
		// you can define state in constructor as its done in older versions of react. but if you dont have
		// the constructor method defined you can define state as a method on this class.
	}

	componentWillMount() {
		console.log('inside person.js component will mount');
	}

	componentDidMount() {
		console.log('inside person.js inside componentDidMount');
		this.inputElement.focus();
	}

	render() {
		console.log('inside person.js render method');
		return (
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input
					ref={(inp) => { this.inputElement = inp }}
					type="text"
					onChange={this.props.changed}
					value={this.props.name} />
			</Aux>
		)
		// const person = (props) => {
		// 	return (	
		// 		<div className={classes.Person}>
		// 			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
		// 			<p>{props.children}</p>
		// 			<input type="text" onChange={props.changed} value={props.name}/>
		// 		</div>
		// 	)
		// };
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person);