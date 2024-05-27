import React, { useState } from "react";

const Sidebar = ({ categoryId, onClickCategory }) => {
  console.log(categoryId);

  const menuThemes = [
    "Все темы",
    "Логика и мышление",
    "Загадки",
    "Головоломки",
    "Путешествия",
  ];
  return (
    <div className="filter">
      {menuThemes.map((item, i) => {
        return (
          <button
            onClick={() => onClickCategory(i)}
            className={`filter-btn ${categoryId === i ? "active" : ""}`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
