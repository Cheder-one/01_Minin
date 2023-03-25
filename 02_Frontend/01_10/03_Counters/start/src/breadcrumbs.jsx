import React from "react";

const Breadcrumbs = ({ page, onGoMain }) => {
  const isMainPage = page.id === "main";
  const mainPageClass = "breadcrumb-item" + (isMainPage ? " active" : "");

  return (
    <nav>
      <ol className="breadcrumb">
        <li className={mainPageClass} onClick={onGoMain}>
          Главная
        </li>
        {!isMainPage && <li className="breadcrumb-item active">{page.text}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
