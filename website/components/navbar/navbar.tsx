import React from "react";
import { MenuItem } from "./menu-item";
import { NavItem } from "./navitem";

export const Navbar = (props: { menu: MenuItem[] }) => {
  return (
    <nav className="hidden lg:flex items-center flex-wrap ">
      <div>
        <div className="flex list-none">
          {props.menu.map((m, i) => {
            return <NavItem key={i} item={m} />;
          })}
        </div>
      </div>
    </nav>
  );
};
