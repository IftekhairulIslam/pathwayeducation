import React from "react";
import { useLocation } from "react-router-dom";

const NavMenu = ({ title, link, subMenus = [], isInAside }) => {
  const location = useLocation();
  const subMenuClass = subMenus.length > 0 ? "contains-sub-menu" : "";
  const currentClass = [link].includes(location.pathname) ? "current" : "";

  return (
    <li
      className={!isInAside ? subMenuClass + " " + currentClass : currentClass}
    >
      <a href={link} className={isInAside ? subMenuClass : ""}>
        {title}
      </a>

      {subMenus.length > 0 && (
        <ul className="sub-menu">
          {subMenus.map((sMenu, sKey) => (
            <li
              className={
                [sMenu.link].includes(location.pathname) ? "current" : ""
              }
              key={sKey}
            >
              <a href={sMenu.link}>{sMenu.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavMenu;
