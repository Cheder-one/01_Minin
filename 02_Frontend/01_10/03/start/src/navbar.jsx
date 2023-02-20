import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { id: "main", text: "Главная", active: true },
    { id: "blog", text: "Блог", active: false },
    { id: "contacts", text: "Контакты", active: false },
  ]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (id) => {
    console.log(id);
  };

  return (
    <div>
      <button className="btn btn-sm btn-primary" onClick={handleMenuClick}>
        Меню
      </button>
      {open && (
        <ul className="list-group">
          {menuItems.map((el) => (
            <NavLink key={el.id} text={el.text} active={el.active} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
