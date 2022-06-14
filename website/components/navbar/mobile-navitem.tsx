import { ArrowFilledDown } from "@components/icons/arrow-filled-down";
import { ArrowFilledRight } from "@components/icons/arrow-filled-right";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import { MenuItem } from "./menu-item";
import { useRouter } from "next/router";

export const MobileNavItem = (props: { item: MenuItem }) => {
  const { item: menu } = props;
  const [show, setShow] = useState(false);
  const { asPath } = useRouter();

  const selected = useMemo(() => {
    return menu.href == asPath;
  }, [menu.href, asPath]);

  const toggleShow = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShow((state) => !state);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between items-center h-12 font-bold pl-4 ${
          selected ? "text-odinred" : "text-odinblue"
        }`}
      >
        {menu.href ? (
          <Link href={menu.href}>
            <a>{menu.label}</a>
          </Link>
        ) : (
          <div onClick={toggleShow}>{menu.label}</div>
        )}
        {menu.children ? (
          <>
            <div className="relative flex-1 h-full" onClick={toggleShow} />
            <ToggleButton value={show} onToggle={toggleShow} />
          </>
        ) : null}
      </div>
      {show ? <SubItems items={menu.children} /> : null}
    </>
  );
};

const ToggleButton = (props: { value: boolean; onToggle: (e: React.MouseEvent) => void }) => {
  return (
    <div className="pr-4" onClick={props.onToggle}>
      {props.value ? (
        <ArrowFilledDown width="36" height="36" fill="currentColor" />
      ) : (
        <ArrowFilledRight width="36" height="36" fill="currentColor" />
      )}
    </div>
  );
};

const SubItems = (props: { items?: MenuItem[] }) => {
  const { items } = props;
  return (
    <div className="pl-4 flex flex-col divide-y">
      {items?.map((m, i) => (
        <MobileNavItem key={i} item={m} />
      ))}
    </div>
  );
};
