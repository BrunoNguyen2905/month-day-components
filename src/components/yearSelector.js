/* eslint-disable no-mixed-operators */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
// import PropTypes from 'prop-types';
import "./components.css";

const yearSelector = (props) => {
    // const [years, setYears] = useState([]);
    let yearOptions=[];
    for(let i =1920 ; i <= 2120; i++ ){
        yearOptions.push(<option key={i} value={i}>{i}</option>)
    }
    return (
        <div>
            <label>Year</label>
            <select name="year" onClick={props.clicked} onChange={props.changeHandler}  value={props.value}>{yearOptions}</select>
        </div>
    );
}

export default yearSelector;