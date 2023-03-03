import React from "react";

const GroupList = () => {
  return (
    <div className="list-group">
      <button
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        The current link item
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        A second link item
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        A third link item
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        A fourth link item
      </button>
      <button
        href="#"
        className="list-group-item list-group-item-action disabled"
        tabIndex="-1"
        aria-disabled="true"
      >
        A disabled link item
      </button>
    </div>
  );
};

export default GroupList;
