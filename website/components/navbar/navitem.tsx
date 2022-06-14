import { ArrowFilledDown } from "@components/icons/arrow-filled-down";
import { ArrowFilledRight } from "@components/icons/arrow-filled-right";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { MenuItem } from "./menu-item";

export const NavItem = (props: { item: MenuItem }) => {
  const { item: menu } = props;

  const [show, setShow] = useState(false);

  const { asPath } = useRouter();

  const selected = useMemo(() => {
    return menu.href == asPath;
  }, [menu.href, asPath]);

  useEffect(() => {
    setShow(false);
  }, [asPath]);

  return (
    <div
      className={`relative flex justify-between items-center font-bold mx-2 hover:text-odinred ${
        selected ? "text-odinred" : "text-odinblue"
      }`}
      onMouseEnter={menu.children ? () => setShow(true) : undefined}
      onMouseLeave={menu.children ? () => setShow(false) : undefined}
    >
      {menu.href ? (
        <Link href={menu.href}>
          <a>{menu.label}</a>
        </Link>
      ) : (
        <div className={"cursor-default"}>{menu.label}</div>
      )}
      {menu.children ? <ToggleIcon value={show} /> : null}
      {show ? <SubItems items={menu.children} /> : null}
    </div>
  );
};

const SubItems = (props: { items?: MenuItem[] }) => {
  const { items } = props;
  return (
    <div className={"absolute flex w-max z-10 flex-col py-2 gap-2 top-full left-0 bg-white shadow-lg"}>
      {items?.map((m, i) => (
        <NavItem key={i} item={m} />
      ))}
    </div>
  );
};

const ToggleIcon = (props: { value: boolean }) => {
  if (props.value) {
    return <ArrowFilledDown width="24" height="24" fill="currentColor" />;
  } else {
    return <ArrowFilledRight width="24" height="24" fill="currentColor" />;
  }
};
