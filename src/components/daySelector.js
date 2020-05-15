import React from 'react';
import "./components.css";


const daySelector = (props) => {
    let dayOptions = [];
    for(let i =1; i <= props.daysinMonth; i++){
      dayOptions.push(<option key={i}>{i}</option>);
    }
    return (
        <div>
            <label>Day</label>
           <select name="day" >{dayOptions}</select>
        </div>
    );
};

export default daySelector;