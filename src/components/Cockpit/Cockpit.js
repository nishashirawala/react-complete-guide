import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    let paraClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if(props.persons.length <= 2) {
        paraClasses.push(classes.red);
    }
    if(props.persons.length <=1) {
        paraClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1>Hi I am a react App</h1>
        <p className = {paraClasses.join( ' ' )}>This is working</p>
            <button className={btnClass}
                onClick={ props.clicked } >
            Toggle Persons
        </button>
        </div>);
};

export default cockpit;
