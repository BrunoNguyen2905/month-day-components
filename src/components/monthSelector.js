/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useState} from 'react';
import DaySelector from './daySelector';
import "./components.css";

const monthSelector = () => {
    const[days, setDays] = useState(31);
    let months =[
        {id: 1,name: "January", days:31},
        {id: 2,name: "February", days: 29},
        {id: 3,name:"March", days: 31},
        {id: 4,name:"April", days: 30},
        {id:5,name:"May", days: 31},
        {id:6,name:"June", days: 30},
        {id:7,name:"July", days: 31},
        {id:8,name:"August", days: 31},
        {id:9,name:"September", days: 30},
        {id:10,name:"October", days: 31},
        {id:11,name:"November", days: 30},
        {id:12,name:"December", days: 31}
      ];
    var monthOptions =[];
        // for (const[index,value]of months.entries()){//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
        // monthOptions.push(
        // <option 
        //     value={value.days}
        //     key={value.id}  
        // >
        // {value.name}
        // </option>);
        months.map(value => {
            return(
                monthOptions.push(
                    <option
                        value={value.days}
                        key={value.id}
                    >
                    {value.name}
                    </option>
                )
            )
        })
    

    
    function monthChangeHandler(event){
        console.log("works" + event.target.value);
        setDays(event.target.value);
    }
    return (
       
        <div>
            <form>
                <label>Month</label>
                <select name="month" onChange={(e)=> monthChangeHandler(e)}>{monthOptions}</select>
                <DaySelector daysinMonth={days}/>
            </form>
                
        </div>
    );
};

export default monthSelector;