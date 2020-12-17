import React from "react";
import Heading from './Heading';
import List from './List';




function App(){
    let currentYear = new Date();
    return (

<div >

    <Heading></Heading>
    <List> </List>
    
   <footer>
     <p>Made by Ali Adam</p>
     <p>Copyright {currentYear.getFullYear()}</p>
   </footer>                   
 </div>
    )
}

export default App;