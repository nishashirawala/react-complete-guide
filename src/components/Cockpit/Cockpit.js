import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        /*const timer = setTimeout(() => {
            alert("save data");
        }, 1000)*/
        toggleButtonRef.current.click();
        return () => {
            console.log('[cockpit.js] clean up work in useffect!');
            //clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        console.log('[cockpit.js] useEffect2');
        return () => {
            console.log('[cockpit.js] clean up work in 2nd useffect!');
        }
    })

    let paraClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.red;
    }

    if(props.personsLength <= 2) {
        paraClasses.push(classes.red);
    }
    if(props.personsLength <=1) {
        paraClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className = {paraClasses.join( ' ' )}>This is working</p>
            <button ref={toggleButtonRef}
                className={btnClass}
                onClick={ props.clicked } >
            Toggle Persons
        </button>
            { <button onClick={authContext.login}>Log in</button>}
        </div>);
};

export default React.memo(cockpit)  ;
