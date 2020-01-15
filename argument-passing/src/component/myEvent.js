import React from 'react';

function MyEvent(){

    function demo1(){
        console.log("Event button Clicked....", this)
    }

    return <div>
        <h1>My Event Called....</h1>
        <button onClick={demo1}>Event</button>
    </div>
};
export default MyEvent;