import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    /*static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.click !== this.props.click;
    }*/

    componentWillUnmount() {
        // Any code which needs to execute right before component is removed from ui.
        console.log('[Persons.js] componentWillUnmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    render() {
        console.log('[Persons.js] rendering');
        return this.props.persons.map((person,index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.props.changed(event, person.id)}
            />
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
}
export default Persons;
