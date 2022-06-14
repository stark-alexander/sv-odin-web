import React, { useCallback, useMemo, useState } from "react";
import { BranchCard } from "./branch-card";
import { PrevButton } from "./prev-button";
import { NextButton } from "./next-button";
import { useTimer } from "./use-timer";

export interface IBranchMeta {
  title: string;
  img: string;
  href: string;
}

export const BranchesCarousel = (props: { branches: IBranchMeta[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const branchList = useMemo(() => {
    return props.branches.map((v, i) => (
      <BranchCard key={i} title={v.title} selected={selectedIndex === i} img={v.img} href={v.href} />
    ));
  }, [props.branches, selectedIndex]);

  const selectedMax = useMemo(() => {
    return branchList.length - 1;
  }, [branchList]);

  const scrollPrev = useCallback(() => {
    setSelectedIndex((index) => decerement(index, selectedMax));
  }, [selectedMax]);

  const scrollNext = useCallback(() => {
    setSelectedIndex((index) => incerement(index, selectedMax));
  }, [selectedMax]);

  const { reset } = useTimer(8000, 1000, scrollNext);

  return (
    <div className={"select-none -mx-4"}>
      <div className={"relative overflow-hidden"}>
        <div className={"w-full aspect-video"}>{branchList}</div>
        <PrevButton
          enabled
          onClick={() => {
            reset();
            scrollPrev();
          }}
        />
        <NextButton
          enabled
          onClick={() => {
            reset();
            scrollNext();
          }}
        />
      </div>
    </div>
  );
};

const incerement = (current: number, max: number): number => {
  if (current === max) {
    return 0;
  }
  return current + 1;
};

const decerement = (current: number, max: number): number => {
  if (current === 0) {
    return max;
  }
  return current - 1;
};
