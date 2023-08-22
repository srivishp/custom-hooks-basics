import useCounter from "../hooks/useCounter";
import Card from "./Card";

const ForwardCounter = () => {
  // Setting the final output of the useCounter hook to a const and passing it
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
