import { useEffect, useState } from "react";
import ProgressBar from "./progress-bar";
import "./progress.css";
export const ProgressBarShow = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div>
      <div>Progress Bar</div>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
    </div>
  );
};
