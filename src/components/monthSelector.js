/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useState} from 'react';
import YearSelector from './yearSelector';
import DaySelector from './daySelector';
import "./components.css";

const monthSelector = () => {
    const[days, setDays] = useState(31);
    const [months, setMonths] =useState([
        {id: 1,name: "January", days:31},
        {id: 2,name: "February", days: 28},
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
    ]);
    var monthOptions =[];
    
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
    

    
    const monthChangeHandler = event =>{
        console.log("works" + event.target.value);
        setDays(event.target.value);
    }

    const LeapYearHandler = (event) => {
            // a Leap year
            if(((event.target.value % 4 ===0) && (event.target.value % 100 !==0)) || (event.target.value % 400 ===0)){
                console.log(" a leap year");
                setMonths([
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
                ])
            }
            else{
                // not a Leap year
                console.log("not a leap year");
                setMonths([
                    {id: 1,name: "January", days:31},
                    {id: 2,name: "February", days: 28},
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
                ])
            }
        }
    return (
       
        <div>
            <form>
                <YearSelector changeHandler={LeapYearHandler}  />
                <label>Month</label>
                <select name="month" onChange={(e)=> monthChangeHandler(e)}>{monthOptions}</select>
                <DaySelector daysinMonth={days}/>
            </form>
                
        </div>
    );
};

export default monthSelector;