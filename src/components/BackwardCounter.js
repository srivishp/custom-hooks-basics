import useCounter from "../hooks/useCounter";
import Card from "./Card";

const BackwardCounter = () => {
  // the 'false' flag must be set to count backwards
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
