import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const [counters, setCounters] = useState([
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 1, name: "Ложка" },
    { id: 2, value: 1, name: "Вилка" },
    { id: 3, value: 1, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ]);

  for (let i = 0; i < counters.length; i++) {
    console.log({ ...counters[i] });
  }
  console.log({ ...counters });

  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((el) => el.id !== id));
  };

  return (
    <>
      {counters.map((el) => (
        <Counter key={el.id} onDelete={handleDelete} {...el} />
      ))}
    </>
  );
};

export default CountersList;
