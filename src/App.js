import { Routes, Route } from "react-router-dom";
import "./App.css";
import Outlayer from "./routes/outlayer";
import Home from "./routes/home/home";
import Projects from "./routes/projects/projects";
import NotFound from "./components/404/404";
import Skills from "./routes/skills/skills";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import Education from "./routes/education/education";
import Blogs from "./routes/blogs/Blogs";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={load ? <Preloader /> : <Outlayer />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
