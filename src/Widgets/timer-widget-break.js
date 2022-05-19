import 'react-circular-progressbar/dist/styles.css';

import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import { BsFillSkipForwardCircleFill } from "react-icons/bs";
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdReplayCircleFilled } from "react-icons/md";

const maxSeconds = 300;
function percentageCalculation(seconds,functionname){
    console.log("Debug:","functionName(): ",functionname,seconds,"s");
    if(seconds >0){
    return ((seconds/maxSeconds)*100).toFixed(2);}
    else if(seconds <0) {

      return 100
    }
}

const BreakTimerClockWidget =()=> {
  const [secondsLeft, setSecondsLeft] = useState(maxSeconds);
  const [timer, setTimer] = useState();
  const [percentage,setPercentage] = useState(percentageCalculation(secondsLeft,"initialization"));
 
  const start = () => {  
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0 || secondsLeft < 0) {
        clearInterval(timer);
      }  

        
    }, 1000);
    setTimer(timer);
    ComputeTimerInterval(secondsLeft);
  };

  const ComputeTimerInterval= (secondsLeft)=>{
    const computedpercentage =setPercentage(()=>setPercentage((percentage) => percentageCalculation(secondsLeft,ComputeTimerInterval)));
  }


   const pause = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft );
    }, 1000);
    setTimer(timer);
     
   }; 
   const resetTimer =()=>{
      setSecondsLeft(25*60);
      setPercentage((percentage) =>percentageCalculation(maxSeconds,"resetTimer") );//working
      if (secondsLeft <= 0 ){
        clearInterval(timer);
       }
      };

  const SkipTimerhandler =()=>{
    if (secondsLeft-50!==0){ 
          setSecondsLeft(secondsLeft-50);
        setPercentage((percentage) =>percentageCalculation(secondsLeft,"SkipTimeHandler") );//working.
    
      }
    else{
        clearInterval(timer);
     
        }
    }
  
  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);   
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);
  
  useEffect (()=>{},10 );
  
  return (
    <div >     
                   <CircularProgressbar className="timerblock" value={(secondsLeft/maxSeconds*100).toFixed(2)} text={`${percentageCalculation(secondsLeft,"CircularProgressbarDiv")}%`} />
    </div>
  );
}
export default BreakTimerClockWidget;