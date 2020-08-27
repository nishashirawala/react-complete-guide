import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

class App extends Component {
   constructor(props) {
       super(props);
       console.log('[App.js] constructor');

   }
  state = {
      persons: [
          { id: 1, name: 'Max', age: 28},
          { id: 2, name: 'Manu', age: 39},
          { id: 3, name: 'Steven', age: 49},
          { id: 4, name: 'Ram', age: 59},
      ],
      otherState: 'Some Other state',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
       console.log('[App.js] getDerivedStateFromProps', props);
       return state;
  }
  componentDidMount() {
      console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('[App.js] shouldComponentUpdate');
      return true;
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

      this.setState({persons: persons})
      this.setState((prevState, props) => {
          return {
              persons: persons,
              changeCounter: prevState.changeCounter + 1
          }
      });
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

  loginHandler = () => {
    this.setState({authenticated: true});
  }
  render() {
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons) {
        persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                    isAuthenticated={this.state.authenticated}/>
    }


    return (
      <Aux>
          <button onClick={() => { this.setState({showCockpit : false});}}> Remove Cockpit </button>
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
              {this.state.showCockpit ? <Cockpit
                  title={this.props.appTitle}
                  showPersons = {this.state.showPersons}
                  personsLength = {this.state.persons.length}
                  clicked = {this.togglePersonsHandler}
                  login = {this.loginHandler}
              /> : null }
              {persons}
          </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Now this works!'))
  }
}

export default withClass(App, classes.App);
