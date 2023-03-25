import React from "react";

const Counter = ({ value, onCounterChange, name, id, onDelete }) => {
  const formatCount = () => (value === 0 ? "empty" : value);

  const getBadgeClasses = () => {
    return `badge m-2 ${value === 0 ? "bg-warning" : "bg-primary"}`;
  };

  const counterText = formatCount();
  const badgeClass = getBadgeClasses();

  return (
    <div>
      <span>{name}</span>
      <span className={badgeClass}>{counterText}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onCounterChange(id, 1)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => onCounterChange(id, -1)}
      >
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
