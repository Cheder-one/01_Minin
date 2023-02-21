import React, { useState } from "react";
import NavElems from "./navElems";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: "main",
      text: "Главная",
      active: true,
      link: "#main",
    },
    {
      id: "blog",
      text: "Блог",
      active: false,
      link: "#blog",
    },
    {
      id: "contacts",
      text: "Контакты",
      active: false,
      link: "#contacts",
    },
  ]);

  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (id) => {
    setMenuItems(
      menuItems.map((el) => ({
        ...el,
        // Аналог выражения el.id === id ? true : false
        active: el.id === id,
      }))
    );
  };

  return (
    <div>
      <button className="btn btn-sm btn-primary" onClick={handleMenuClick}>
        Меню
      </button>
      {open && (
        <ul className="list-group">
          {menuItems.map((item) => (
            <NavElems
              key={item.id}
              {...item}
              onActiveChange={handleItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
