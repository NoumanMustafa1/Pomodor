import { useEffect, useState } from "react";

import a from "../index.css";
import darkMode from ".././static/images/svgexport-5.svg";

// import styled  from "styled-components";

// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;

const ToggleSwitch =()=>{
    const [theme_btn_text,setThemeTextDisplayToggler]= useState("Dark Mode");
        
    const [theme, setTheme] = useState("../index.css");
    console.log("Debug toggle",a);
    const themeToggler = () => {
        theme === ".././index.css" ? setTheme(".././indexLight.css") : setTheme("../index.css");
        // setThemeTextDisplayToggler("../indexLight.css");
      
        if (theme === "../indexLight.css"){
          setThemeTextDisplayToggler("Light Mode");
        }
        else {
          setThemeTextDisplayToggler("Dark Mode");
         
        }
        console.log(theme_btn_text)
      };
      


      useEffect(() => {
        var head = document.head;
        var link = document.createElement("link");
          
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = theme;
    
        head.appendChild(link);
    
        return () => { head.removeChild(link); }},[theme]);  

      return (
                    <button className="toggleThemeSelector" type="button" onClick={themeToggler}>
        
                    <img src={darkMode} alt="" />
                    {theme_btn_text}
        </button>
      );
    
}


export default  ToggleSwitch;