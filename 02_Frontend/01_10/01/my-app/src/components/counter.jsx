import React, { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

   const formatCount = () => {
      return count === 0 ? "empty" : count;
   };

   const getBadgeClasses = () => {
      let classes = "badge m-2 ";
      classes += count === 0 ? "bg-warning" : "bg-primary";
      return classes;
   };

   const handleIncrement = () => {
      setCount((prevState) => prevState + 1);
   };
   const handleDecrement = () => {
      setCount((prevState) => prevState - 1);
   };
   const handleTagChange = (tag) => {

   };

   return (
      <>
         <ul>
            {tags.map((tag) => (
               <li
                  key={tag}
                  className="btn btn-primary btm-sm m-2"
                  onClick={() => handleTagChange(tag)}
               >
                  {tag}
               </li>
            ))}
         </ul>
         <span className={getBadgeClasses()}>{formatCount()}</span>
         <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleIncrement}
         >
            +
         </button>
         <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleDecrement}
         >
            -
         </button>
      </>
   );
};

export default Counter;



//-------------Other-------------
// const Counter1 = () => {
//    const [open, setOpen] = useState(false);
//    let [menuItems, setMenuItems] = useState(["Главная", "Блог", "Контакты"]);

//    const handleMenuClick = () => {
//       setOpen((prevState) => !prevState);
//    };

//    const handleMenuItemClick = (item) => {
//       const newMenuItems = menuItems.map((menuItem) => {
//          if (menuItem === item) {
//             return "New Name";
//          }
//          return menuItem;
//       });
//       setMenuItems(newMenuItems);
//    };


//    return (
//       <div>
//          <button className="btn btn-sm btm-primary" onClick={handleMenuClick}>
//             Меню
//          </button>

//          {open && (
//             <ul className="list-group">
//                {menuItems.map((item) => (
//                   <li
//                      className="list-group-item"
//                      key={item}
//                      onClick={() => handleMenuItemClick(item)}
//                   >
//                      {item}
//                   </li>
//                ))}
//             </ul>
//          )}
//       </div>
//    );
// };

// export { Counter1 };
