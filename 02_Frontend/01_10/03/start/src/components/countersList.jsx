import React from "react";
import Counter from "./counter";

const CountersList = () => {
  const counters = [
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 1 },
  ];
  return (
    <>
      {counters.map((el) => (
        <Counter key={el.id} value={el.value} />
      ))}
    </>
  );
};

export default CountersList;
