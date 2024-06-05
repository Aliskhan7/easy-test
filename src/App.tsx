import React, { useEffect, useState, useCallback } from "react";
import { useThemes } from "./context/themes-context";
import Card from "./components/Card/Card.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { CourseListProps, ITheme } from "./types.ts";

const TOPICS = [
  "Все темы",
  "Логика и мышление",
  "Загадки",
  "Головоломки",
  "Путешествия",
];

const TOPIC_TAG_MAP: Record<string, string> = {
  Путешествия: "Страны и столицы",
};

const App: React.FC<CourseListProps> = () => {
  const { loading, themes } = useThemes();
  const [filteredCourses, setFilteredCourses] = useState<ITheme[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>("Все темы");

  const filterCourses = useCallback(
    (topic: string) => {
      setSelectedTopic(topic);
      if (topic === "Все темы") {
        setFilteredCourses(themes);
      } else {
        const tag = TOPIC_TAG_MAP[topic] || topic;
        const result = themes.filter((course) => course.tags.includes(tag));
        setFilteredCourses(result);
      }
    },
    [themes],
  );

  useEffect(() => {
    setFilteredCourses(themes);
  }, [themes]);

  const handleCategoryClick = useCallback(
    (item: string) => {
      filterCourses(item);
    },
    [filterCourses],
  );

  return (
    <div className="container main-block">
      <Sidebar
        topics={TOPICS}
        selectedTopic={selectedTopic}
        onClickCategory={handleCategoryClick}
      />
      <Card themes={filteredCourses} loading={loading} />
    </div>
  );
};

export default App;
