import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const [state, setState] = useState(false); // hover에 따른 상태
  const ref = useRef(null);

  const handlerMouseOver = useCallback(() => setState(true), []);
  const handlerMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handlerMouseOver);
    element.addEventListener("mouseout", handlerMouseOut);

    return () => {
      element.removeEventListener("moveover", handlerMouseOver);
      element.removeEventListener("moveout", handlerMouseOut);
    };
  }, [ref, handlerMouseOver, handlerMouseOut]);

  return [ref, state];
};

export default useHover;
