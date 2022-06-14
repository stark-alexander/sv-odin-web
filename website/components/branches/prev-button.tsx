import React from "react";
import { ArrowLeft } from "@components/icons/arrow-left";

export const PrevButton = (props: {
  enabled: boolean;
  onClick: () => void;
}) => (
  <div
    className={
      "absolute top-0 bottom-0 left-0 flex items-center pointer-events-none"
    }
  >
    <ArrowLeft
      onClick={props.onClick}
      className={
        "z-20 text-white opacity-80 cursor-pointer w-14 h-14 lg:w-20 lg:h-20 pointer-events-auto"
      }
      fill={"currentColor"}
    />
  </div>
);
