import React from "react";
import NavElems from "./navElems";

const Navbar = (props) => {
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {props.menuItems.map((item) => (
          <NavElems
            key={item.id}
            {...item}
            onActiveChange={props.onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
