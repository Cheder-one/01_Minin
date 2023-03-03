import React from "react";

const GroupList = () => {
  return (
    <div className="list-group">
      <button
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Sort by: Date
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        Sort by: Name
      </button>
      <button
        href="#"
        className="list-group-item list-group-item-action disabled"
        tabIndex="-1"
        aria-disabled="true"
      >
        Sort by: Season
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        Sort by: Popularity
      </button>
      <button href="#" className="list-group-item list-group-item-action">
        Sort by: From The End
      </button>
    </div>
  );
};

export default GroupList;
