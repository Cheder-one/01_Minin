import React from "react";
import NavElems from "./navElems";

const Navbar = ({ onItemClick, menuItems }) => {
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <NavElems key={item.id} {...item} onActiveChange={onItemClick} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
