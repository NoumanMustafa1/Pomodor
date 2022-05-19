import 'react-circular-progressbar/dist/styles.css';

import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import { BsFillSkipForwardCircleFill } from "react-icons/bs";
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdReplayCircleFilled } from "react-icons/md";

const maxSeconds = 1500;
function percentageCalculation(seconds,functionname){
    console.log("Debug:","functionName(): ",functionname,seconds,"s",seconds%60,((seconds%60)/60*100).toFixed(2));
  
    if(seconds >0){
        return ((seconds/maxSeconds)*100).toFixed(2);}
    else if(seconds <0) {
      return 100
    }
}

const TimerClockWidget =()=> {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState();
  const [percentage,setPercentage] = useState(percentageCalculation(secondsLeft,"initialization"));
  
  const start = () => {  
      const  timer = setInterval(() => {

      setSecondsLeft((secondsLeft) => secondsLeft - 1);
  
      if (secondsLeft === 0 || secondsLeft < 0) {
        clearInterval(timer);
      }  
    }, 1000);
    
    setTimer(timer);
  };


   const pause = (Seconds) => {
      const timer = setInterval(() => {
      setSecondsLeft((Seconds) => Seconds );
      }, 1000);
    setTimer(timer);
   }; 
   
    const resetTimer =()=>{
      setSecondsLeft(25*60);
      setPercentage((percentage) =>percentageCalculation(secondsLeft,"resetTimer") );//working
      if (secondsLeft <= 0 ){
        clearInterval(timer);
      }
      };

  const SkipTimerhandler =()=>{
    if (secondsLeft-50!==0){ 
          setSecondsLeft(secondsLeft-30);
        setPercentage((percentage) =>percentageCalculation(secondsLeft,"SkipTimeHandler") );//working.
      }
    else{
        clearInterval(timer);
     
        }
    }
  
  useEffect((Seconds) => {
    if (Seconds === 0 || Seconds < 0) {
      clearInterval(timer);    
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  useEffect (()=>{},10 );
  
  return (
    <div className="App">
       
                   {/* <CircularProgressbar className="timerblock" value={(secondsLeft/maxSeconds*100).toFixed(2)} text={`${percentageCalculation(secondsLeft,"CircularProgressbarDiv")}%`}/>  */}

                   <CircularProgressbar className="timerblock" value={((secondsLeft%60)/60*100).toFixed(2)} text={`${Math.floor(secondsLeft/60).toFixed(0)}:${(secondsLeft%60).toFixed(0)}`}/>
                   
       <h2 className="CenteredH2">
                   HOURS:{(secondsLeft/3600).toFixed(0)}, 
                   MINUTES:{Math.floor(secondsLeft/60).toFixed(0)}, 
                   SECONDS:{secondsLeft%60} </h2>
     
                 
      <div className="menuOptions">
     
            <button onClick={resetTimer} className="btnDiv" >
                <MdReplayCircleFilled size={30} />     
            </button>
            <button onClick={start} className="btnDiv">
                <AiFillPlayCircle size={40}   />
            </button>
            
            <button onClick={pause} className="btnDiv">
                <AiFillPauseCircle size={40}   />
            </button>
            
            <button   onClick={SkipTimerhandler} className="btnDiv">
                <BsFillSkipForwardCircleFill size={30}/>
            </button>
               
            
            </div>
            
            
    </div>
  );
}
export default TimerClockWidget;