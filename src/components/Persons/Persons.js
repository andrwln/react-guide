import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        // react does this by default, if defining on your own, you must call super.
        // this is useless unless you add additional logic
        super(props);
        console.log('inside persons.js constructor method');
        // you can define state in constructor as its done in older versions of react. but if you dont have
        // the constructor method defined you can define state as a method on this class.
    }

    componentWillMount() {
        console.log('inside persons.js component will mount');
    }

    componentDidMount() {
        console.log('inside persons.js inside componentDidMount');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('UPDATE persons.js inside componentWillReceiveProps');
    }

    // PureComponent does this for us
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('UPDATE persons.js inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('UPDATE persons.js inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('UPDATE persons.js inside componentDidUpdate');
    }

    render() {
        console.log('inside persons.js render method');
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}
// const persons = (props) => props.persons.map((person, index) => {
//         return <Person
//             key={person.id}
//             name={person.name}
//             age={person.age}
//             click={() => props.clicked(index)}
//             changed={(event) => props.changed(event, person.id)} />
//     });

export default Persons;
