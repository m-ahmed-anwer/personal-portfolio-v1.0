import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./NavigationCss.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const $menu = $(".Menu-list");
    const $item = $(".Menu-list-item");
    const w = $(window).width();
    const h = $(window).height();

    const handleMouseMove = (e) => {
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 2;
      const dx = e.pageX - w / 2;
      let theta = Math.atan2(dy, dx);
      let angle = (theta * 180) / Math.PI - 90;
      const offsetPoster = $menu.data("offset");
      const transformPoster = `translate3d(0, ${
        -offsetX * offsetPoster
      }px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${
        offsetX * (offsetPoster * 2)
      }deg)`;

      if (angle < 0) {
        angle = angle + 360;
      }

      $menu.css("transform", transformPoster);

      $item.each(function () {
        const $this = $(this);
        const offsetLayer = $this.data("offset") || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${
          offsetY * offsetLayer
        }px, 20px)`;

        $this.css("transform", transformLayer);
      });
    };

    $(window).on("mousemove", handleMouseMove);

    return () => {
      $(window).off("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <input
        id="page-nav-toggle"
        className="main-navigation-toggle"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />

      <label htmlFor="page-nav-toggle">
        <svg className="icon--menu-toggle" viewBox="0 0 60 30">
          <g className="icon-group">
            <g className="icon--menu">
              <path d="M 6 0 L 54 0" />
              <path d="M 6 15 L 54 15" />
              <path d="M 6 30 L 54 30" />
            </g>
            <g className="icon--close">
              <path d="M 15 0 L 45 30" />
              <path d="M 15 30 L 45 0" />
            </g>
          </g>
        </svg>
      </label>

      <nav className="main-navigation">
        <div className="Menu">
          <ul className="Menu-list" data-offset={10}>
            <li className="Menu-list-item" data-offset={20}>
              <Link to="/" onClick={handleToggle} className="link">
                Home
                <span className="Mask">
                  <span>Home</span>
                </span>
                <span className="Mask">
                  <span>Home</span>
                </span>
              </Link>
            </li>

            <li className="Menu-list-item" data-offset={10}>
              <Link to="/skills" onClick={handleToggle} className="link">
                Skills
                <span className="Mask">
                  <span>Skills</span>
                </span>
                <span className="Mask">
                  <span>Skills</span>
                </span>
              </Link>
            </li>
            <li className="Menu-list-item" data-offset={5}>
              <Link to="/education" onClick={handleToggle} className="link">
                Education
                <span className="Mask">
                  <span>Education</span>
                </span>
                <span className="Mask">
                  <span>Education</span>
                </span>
              </Link>
            </li>
            <li className="Menu-list-item" data-offset={15}>
              <Link to="/projects" onClick={handleToggle} className="link">
                Projects
                <span className="Mask">
                  <span>Projects</span>
                </span>
                <span className="Mask">
                  <span>Projects</span>
                </span>
              </Link>
            </li>
            <li className="Menu-list-item" data-offset={15}>
              <Link to="/blogs" onClick={handleToggle} className="link">
                Blogs
                <span className="Mask">
                  <span>Blogs</span>
                </span>
                <span className="Mask">
                  <span>Blogs</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
