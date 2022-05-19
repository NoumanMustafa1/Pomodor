import ToggleSwitch from "./toggle";
import svgexport1 from ".././static/images/svgexport-1.svg";
import svgexport2 from ".././static/images/svgexport-2.svg";
import svgexport3 from ".././static/images/svgexport-3.svg";
import svgexport4 from ".././static/images/svgexport-4.svg";

const SideMenu =()=> {
  return (

    <div className="SideMenu">
        <div className="Logo-decorator">
        <img src={svgexport1} alt="SVG "/>
         </div>
        <div className="MenuList">

        <ul>
            <li><a href="/timer"><img src={svgexport2} alt=""/> Timer</a></li>
            <li><a href="/stat"><img src={svgexport3} alt=""/> Stats</a></li>
            <li><a href="/settings"><img src={svgexport4} alt=""/> Setting</a></li>
        </ul>
        </div>

        <ToggleSwitch />

        </div>
  
)}



export default SideMenu;

