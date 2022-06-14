import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = (
  duration: number,
  timeout: number,
  onTick: () => void
) => {
  const state = useRef<any>({ id: 0 });

  const start = useCallback(() => {
    const tick = () => {
      onTick();
      state.current.id = setTimeout(tick, duration);
    };
    state.current.id = setTimeout(tick, duration);

    return () => setTimeout(state.current.id);
  }, [onTick, duration]);

  const clear = useCallback(() => {
    clearTimeout(state.current.id);
  }, []);

  const reset = useCallback(() => {
    clear();
    start();
  }, [start, clear]);

  useEffect(() => {
    state.current.id = setTimeout(start, timeout);
    return clear;
  }, [start, clear, timeout]);

  return { reset };
};
