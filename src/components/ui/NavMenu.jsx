import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavMenu = ({ title, link, subMenus = [], isInAside }) => {
  const location = useLocation();
  const subMenuClass = subMenus.length > 0 ? "contains-sub-menu" : "";
  const currentClass = [link].includes(location.pathname) ? "current" : "";

  return (
    <li
      className={!isInAside ? subMenuClass + " " + currentClass : currentClass}
    >
      <Link to={link} className={isInAside ? subMenuClass : ""}>
        {title}
      </Link>

      {subMenus.length > 0 && (
        <ul className="sub-menu">
          {subMenus.map((sMenu, sKey) => (
            <li
              className={
                [sMenu.link].includes(location.pathname) ? "current" : ""
              }
              key={sKey}
            >
              <Link to={sMenu.link}>{sMenu.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavMenu;
