import { useEffect, useRef, useState } from "react";
import useRafState from "./useRafState";

const useScroll = () => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: ref.current.scrollLeft,
        y: ref.current.scrollTop,
      });
    };

    // passive 옵션을 사용하면 브라우저가 preventDefault옵션을 확인하지 않는다.
    // (약간의 성능적 이점을 얻을 수 있다)
    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, setState]);

  return [ref, state];
};

export default useScroll;
