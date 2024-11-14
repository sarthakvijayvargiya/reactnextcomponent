import { useEffect, useState } from "react";
import './progress.css'
import { MAX,MIN } from "./contants";
/* eslint-disable react/prop-types */
const ProgressBar = ({ value = 0 ,onComplete=()=>{}}) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if(percent>=MAX){
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress-section">
      <span>{percent.toFixed()}%</span>
      <div 
      role="progressbar"
      aria-valuemin={MIN}
      aria-valuemax={MAX}
      aria-valuenow = {percent.toFixed()}
      style={{width: `${percent}%`}}></div>
    </div>
  );
};
export default ProgressBar;
