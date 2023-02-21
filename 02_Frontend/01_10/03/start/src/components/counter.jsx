import React, { useState } from "react";

const Counter = (props) => {
  const { value } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  const handleIncrement = () => {
    // setValue((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    // setValue((prevState) => prevState - 1);
  };

  const counterText = formatCount();
  const badgeClass = getBadgeClasses();

  return (
    <div>
      <span>{props.name}</span>
      <span className={badgeClass}>{counterText}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
