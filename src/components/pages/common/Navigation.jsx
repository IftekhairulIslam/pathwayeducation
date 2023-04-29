import React from "react";
import NavMenu from "./../../ui/NavMenu";

const Navigation = ({ isInAside = false }) => {
  let classNames =
    "navigation nav-block primary-navigation sub-menu-indicator nav-right no-margin-right";
  if (isInAside) classNames = "side-navigation";
  return (
    <nav className={classNames}>
      <ul>
        <NavMenu title="About Us" link="/about" isInAside={isInAside} />

        <NavMenu
          title="Admission"
          link="/admission"
          subMenus={[
            { title: "Study In Australia", link: "/admission-australia" },
            { title: "Study In London", link: "/admission-london" },
            { title: "Study In USA", link: "/admission-usa" },
          ]}
          isInAside={isInAside}
        />

        <NavMenu
          title="Migration"
          link="/migration"
          subMenus={[{ title: "All Kinds Of Visas", link: "/visas" }]}
          isInAside={isInAside}
        />

        <NavMenu
          title="Coaching"
          link="/coaching"
          subMenus={[
            { title: "IELTS", link: "/coaching-ielts" },
            { title: "PTE", link: "/coaching-pte" },
            { title: "Spoken English", link: "/coaching-english" },
            { title: "Japanese Language", link: "/coaching-japanese" },
          ]}
          isInAside={isInAside}
        />

        <NavMenu
          title="Tourist & Travels"
          link="/travels"
          isInAside={isInAside}
        />
        <NavMenu
          title="Other Services"
          link="/other-services"
          isInAside={isInAside}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
