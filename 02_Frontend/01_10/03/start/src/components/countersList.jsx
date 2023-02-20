import React from "react";
import Counter from "./counter";

const CountersList = () => {
  const counters = [{ id: 0 }, { id: 1 }, { id: 2 }];
  return (
    <>
      {counters.map((el) => (
        <Counter key={el.id} />
      ))}
    </>
  );
};

export default CountersList;
