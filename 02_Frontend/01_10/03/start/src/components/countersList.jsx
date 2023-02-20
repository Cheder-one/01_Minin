import React from "react";
import Counter from "./counter";

const CountersList = () => {
  const counters = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 1, name: "Ложка" },
    { id: 2, value: 1, name: "Вилка" },
    { id: 3, value: 1, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];

  return (
    <>
      {counters.map((el) => (
        <Counter key={el.id} value={el.value} name={el.name} />
      ))}
    </>
  );
};

export default CountersList;
