import React from 'react';




let color = {
  color: "coral",
  letterSpacing: '12px'
};

let time = new Date();

let currentTime = "Morning"

let currentHour = time.getHours();

console.log(currentHour);

let currentColor = {
  color: "red"
};



if(currentHour >= 12 && currentHour <= 17 ){
    currentTime = "Afternoon";
    currentColor.color = "green";
  }else if(currentHour >= 18 && currentHour <= 23){
    currentTime = "Evening";
    currentColor.color = "black"
  }
  

function Heading(){
    return  <div className="heading">
               <h1 style={currentColor}>Good {currentTime}!</h1>
               <h1 style={color} >Hello I am Adam</h1>
            </div>
  }

  export default Heading;