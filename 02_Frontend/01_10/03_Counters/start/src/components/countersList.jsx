import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 1, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleCounterChange = (id, delta) => {
    setCounters((prevState) =>
      prevState.map((el) =>
        el.id === id
          ? { ...el, value: Math.max(0, el.value + delta) }
          : { ...el }
      )
    );
  };

  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((el) => el.id !== id));
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((el) => (
        <Counter
          key={el.id}
          onDelete={handleDelete}
          {...el}
          onCounterChange={handleCounterChange}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
