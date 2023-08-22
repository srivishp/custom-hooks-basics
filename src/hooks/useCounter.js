import { useState, useEffect } from "react";

// Only custom hooks can start with 'use'
// countForward flag is a dependency
const useCounter = (countForwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (countForwards) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countForwards]);
  // counter must be returned here because it is passed as a value in other components
  return counter;
};

export default useCounter;
