import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
      persons: [
          { id: 1, name: 'Max', age: 28},
          { id: 2, name: 'Manu', age: 39},
          { id: 3, name: 'Steven', age: 49},
          { id: 4, name: 'Ram', age: 59},
      ],
      otherState: 'Some Other state',
      showPersons: false
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value
      const persons = [...this.state.persons]
      persons[personIndex] = person;

      this.setState()
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
        persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
    }


    return (
      <div className={classes.App}>
          <Cockpit
              showPersons = {this.state.showPersons}
              persons = {this.state.persons}
              clicked = {this.togglePersonsHandler}
          />
          {persons}
      </div>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Now this works!'))
  }
}

export default App;
