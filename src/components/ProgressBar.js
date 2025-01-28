import { useState, useEffect } from "react";
import { MAX, MIN } from "../constants";

const ProgressBar = ({ value = MIN, onComplete = () => {} }) => {
  const [percentage, setPercentage] = useState(value);
  useEffect(() => {
    setPercentage(Math.min(MAX, Math.max(MIN, value)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percentage > 49 ? "white" : "black" }}>
        {percentage.toFixed()}%{" "}
      </span>
      <div
        style={{ width: `${percentage}%` }}
        role="ProgressBar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percentage.toFixed()}
      >
        {" "}
      </div>
    </div>
  );
};
export default ProgressBar;
