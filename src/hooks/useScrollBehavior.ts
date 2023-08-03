import { useCallback, useEffect, useRef, useState } from "react";

type Behavior = "onTop" | "scrollDown" | "scrollUp";

export default function useScrollBehavior() {
  const prevScrollY = useRef(0);
  const verifyScrollBehavior = (): Behavior => {
    const currentScrollPos = window.scrollY;
    let behavior: Behavior | null;
    if (currentScrollPos === 0) behavior = "onTop";
    else if (currentScrollPos > prevScrollY.current) behavior = "scrollDown";
    else behavior = "scrollUp";

    prevScrollY.current = currentScrollPos;
    return behavior;
  };

  const handle = useCallback((e: any) => {
    const currentBehavior = verifyScrollBehavior();
    setBehavior(currentBehavior);
  }, []);

  const [behavior, setBehavior] = useState(verifyScrollBehavior());

  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [prevScrollY, behavior, handle]);

  return behavior;
}
