import { useEffect, useRef, EffectCallback, DependencyList } from "react";

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    return effect();
  }, deps);
}
