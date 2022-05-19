import './index.css';

import {Route, BrowserRouter as Router} from "react-router-dom";

import DefaultFooter  from "./Components/footer";
import Settings from "./settings";
import SideMenu from ".//Components//side-menu";
import Stat from "./stat";
import Timer from "./timer";

function App() {
  return (
<div>
  
   <div className="left-container">
   <SideMenu/>
    </div> 
  
    <div className="right-container">
    <div className="loginSignStat">
     </div>
            
          <Router>
              <Route path={["/timer","/Timer"]}>
                                                      <Timer/>
              </Route>
            
              <Route path={["/stat","/Stat","/stats","/Stats"]}>
                                                      <Stat/>
              </Route>

            <Route path={["/setting","/settings","/Setting","/Settings"]}>
                                                      <Settings/>
            </Route>

          </Router>
          <DefaultFooter/>
    </div>
</div>
  );
};

export default App;
