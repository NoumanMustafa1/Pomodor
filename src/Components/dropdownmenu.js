import React, {useState} from 'react';
import Select from 'react-select';
import "bootstrap/dist/css/bootstrap.min.css";

export const DropDown =()=> {
const [statusOpt, setDropDownState] = useState("Login");

 const ChangeState =()=> {
     statusOpt = setDropDownState("Sign Out") 
 }

 return (<div>
     <ul>
         <li>
             statusOpt
         </li>
     </ul>
 </div>)
}

