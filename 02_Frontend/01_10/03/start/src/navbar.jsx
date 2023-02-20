import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

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
            <li
              className="list-group-item"
              key={el}
              onClick={() => handleItemClick(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
