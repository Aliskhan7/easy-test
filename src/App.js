import Card from "./components/Card/Card";
import React, { useState } from "react";
import { useThemes } from "./context/themes-context";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { themes } = useThemes();
  const [categoryId, setCategoryId] = useState("");

  return (
    <div className="container main-block">
      <Sidebar
        categoryId={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
      />
      <Card />
    </div>
  );
}

export default App;
