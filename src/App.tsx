import Card from "./components/Card/Card.tsx";
import React, { useEffect, useState } from "react";
import { useThemes } from "./context/themes-context";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { CourseListProps, ITheme } from "./types.ts";

const App: React.FC<CourseListProps> = () => {
  const { loading, themes } = useThemes();
  const [filteredCourses, setFilteredCourses] = useState<ITheme[]>(themes);
  const [selectedTopic, setSelectedTopic] = useState<string>("Все темы");

  const topics = [
    "Все темы",
    "Логика и мышление",
    "Загадки",
    "Головоломки",
    "Путешествия",
  ];

  const topicTagMap: { [key: string]: string } = {
    Путешествия: "Страны и столицы",
  };

  const filterCourses = (topic: string) => {
    setSelectedTopic(topic);
    if (topic === "Все темы") {
      setFilteredCourses(themes);
    } else {
      const tag = topicTagMap[topic] || topic;
      const result = themes.filter((course) => course.tags.includes(tag));
      setFilteredCourses(result);
    }
  };

  useEffect(() => {
    filterCourses("Все темы");
  }, [themes]);

  return (
    <div className="container main-block">
      <Sidebar
        topics={topics}
        selectedTopic={selectedTopic}
        onClickCategory={(item: string) => filterCourses(item)}
      />
      <Card themes={filteredCourses} loading={loading} />
    </div>
  );
};

export default App;
