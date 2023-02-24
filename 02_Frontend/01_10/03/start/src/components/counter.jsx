import React from "react";

const Counter = ({ value, onIncrement, onDecrement, name, id, onDelete }) => {
  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const counterText = formatCount();
  const badgeClass = getBadgeClasses();

  return (
    <div>
      <span>{name}</span>
      <span className={badgeClass}>{counterText}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={onIncrement(value)}
      >
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={onDecrement}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
