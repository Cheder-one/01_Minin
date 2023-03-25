import React, { useState } from "react";
import Navbar from "./navbar";
import Breadcrumbs from "./breadcrumbs";

const Page = () => {
  const [menuItems, setMenuItems] = useState([
    { id: "main", text: "Главная", active: true, link: "#main" },
    { id: "blog", text: "Блог", active: false, link: "#blog" },
    { id: "contacts", text: "Контакты", active: false, link: "#contacts" },
  ]);

  const handleItemClick = (id) => {
    setMenuItems(
      menuItems.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
  };

  const handleSetMainActive = () => {
    setMenuItems(
      menuItems.map((item) => ({
        ...item,
        active: item.id === "main",
      }))
    );
  };

  const currentActivePage = menuItems.find((item) => item.active);

  const logoUrl = "https://picsum.photos/30";
  const siteName = "Example.com";

  return (
    <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src={logoUrl} alt="" className="bi pe-none me-2" />
          <span className="fs-4">{siteName}</span>
        </div>
        <hr />
        <Navbar menuItems={menuItems} onItemClick={handleItemClick} />
      </div>
      <div className="p-4">
        <div>
          <Breadcrumbs
            page={currentActivePage}
            onGoMain={handleSetMainActive}
          />
        </div>
        <h1 className="h3">Контент</h1>
      </div>
    </main>
  );
};

export default Page;
