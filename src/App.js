import { Routes, Route } from "react-router-dom";
import "./App.css";
import Outlayer from "./routes/outlayer";
import Home from "./routes/home/home";
import Projects from "./routes/projects/projects";
import NotFound from "./components/404/404";
import Skills from "./routes/skills/skills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlayer />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
