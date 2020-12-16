import React from 'react';
import ReactDOM from 'react-dom';

let currentYear = new Date();

ReactDOM.render(
  <div id="skills">

    <h1>Hello I am Adam</h1>
    
    <ul>
                              
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li> 
                          
    </ul>

    <ul>
        <li>jQuery</li> 
        <li>Bootstrap 5</li> 
        <li>Sass</li> 
   </ul>  

   <footer>
     <p>Made by Ali Adam</p>
     <p>Copyright {currentYear.getFullYear()}</p>
   </footer>                   
 </div>,
  document.getElementById('root')
);

