import React, { useContext } from "react";
import AboutMe from "../about-me/about";
import Skills from "../skills/skills";
import { NavbarContext } from "../../context/navbar.context";
import Projects from "../projects/projects";
import Education from "../education/education";

function Home() {
  const { data } = useContext(NavbarContext);
  return (
    <div>
      {data === "Home" ? (
        <AboutMe />
      ) : data === "Skills" ? (
        <Skills />
      ) : data === "Projects" ? (
        <Projects />
      ) : data === "Education" ? (
        <Education />
      ) : (
        <AboutMe />
      )}
    </div>
  );
}

export default Home;
