import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor (props) {
    // react does this by default, if defining on your own, you must call super.
    // this is useless unless you add additional logic
    super(props);
    console.log('inside app js constructor method');
    // you can define state in constructor as its done in older versions of react. but if you dont have
    // the constructor method defined you can define state as a method on this class.
    this.state = {
      persons: [
        { id: '123asdf', name: 'Max', age: 28 },
        { id: '23232', name: 'Manu', age: 29 },
        { id: '123232', name: 'Stephanie', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('inside app js component will mount');
  }

  componentDidMount() {
    console.log('inside app js inside componentDidMount');
  }

  // PureComponent automatically does this for us. Only use PureComponents if updates might not be required.
  // This takes some additional performance cpu so only use it when it helps.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE App.js inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE App.js inside componentDidUpdate');
  }

  // If state changes, react will re render the DOM
  // Whereas props are set and passed from outside into the component, state is managed from inside the component
  // state = {
  //   persons: [
  //     { id: '123asdf', name: 'Max', age: 28 },
  //     { id: '23232', name: 'Manu', age: 29 },
  //     { id: '123232', name: 'Stephanie', age: 26 }
  //   ],
  //   showPersons: false
  // }

  // DON'T DO THIS: this.state.persons[0].name = "ANDREW"
  // setState is a method on the Component object
  // Changes to state and props are the only thing that will lead react to update the DOM

  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons]; // good practice is to make a copy of array before making changes using spread operator
    persons.splice(personsIndex, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState((prevState, props) => {
      return { 
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  render() {
    console.log('inside render of app.js');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          showPersons={this.state.showPersons} 
          clicked={this.togglePersonsHandler}
          persons={this.state.persons} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
