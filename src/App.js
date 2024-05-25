import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import { useEffect } from "react";
import { useThemes } from "./context/themes-context";

function App() {
  const { themes } = useThemes();
  console.log("themes", themes);
  useEffect(() => {}, []);

  return (
    <div className="container main-block">
      <Sidebar />
      <Card />
    </div>
  );
}

export default App;
