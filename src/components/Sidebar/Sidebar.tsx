import React from "react";
import { CourseListSidebarProps } from "../../types.ts";

const Sidebar: React.FC<CourseListSidebarProps> = ({
  topics,
  selectedTopic,
  onClickCategory,
}) => {
  return (
    <div className="filter">
      {topics!.map((topic: string) => {
        return (
          <button
            key={topic}
            onClick={() => onClickCategory(topic)}
            className={`filter-btn ${selectedTopic === topic && "active"}`}
          >
            {topic}
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
