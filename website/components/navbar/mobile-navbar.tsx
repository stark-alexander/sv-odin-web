import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CloseButton, MenuButton } from "./buttons";
import { MenuItem } from "./menu-item";
import { MobileNavItem } from "./mobile-navitem";

export const MobileNavbar = (props: { menu: MenuItem[] }) => {
  const [active, setActive] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setActive(false);
  }, [asPath]);

  const handleClick = () => {
    setActive(!active);
  };

  const hideMenu = () => {
    setActive(false);
  };

  return (
    <nav className="lg:hidden flex items-center flex-wrap">
      {active ? (
        <CloseButton onClick={hideMenu} />
      ) : (
        <MenuButton onClick={handleClick} />
      )}
      {active ? (
        <div
          onClick={hideMenu}
          className={
            "bg-gray-900 bg-opacity-60 fixed top-20 left-0 w-screen h-screen"
          }
        />
      ) : null}
      <div
        className={`${
          active ? "" : "hidden"
        } bg-gray-50 fixed overflow-y-auto right-0 top-20 bottom-0 w-full md:w-72`}
      >
        <div className="flex flex-col divide-y border-solid list-none">
          {props.menu.map((m, i) => {
            return <MobileNavItem key={i} item={m} />;
          })}
        </div>
      </div>
    </nav>
  );
};
