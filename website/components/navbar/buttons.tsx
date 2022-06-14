import { Close } from "@components/icons/close";
import { MenuBurger } from "@components/icons/menu-burger";
import React from "react";

export const MenuButton = (props: { onClick?: () => void }) => {
  return (
    <button className="ml-auto lg:hidden text-odinblue" onClick={props.onClick}>
      <Close width="36" height="36" fill="currentColor" viewBox="0 0 24 24" />
    </button>
  );
};

export const CloseButton = (props: { onClick?: () => void }) => {
  return (
    <button className="ml-auto lg:hidden text-odinblue" onClick={props.onClick}>
      <MenuBurger width="36" height="36" fill="currentColor" />
    </button>
  );
};
