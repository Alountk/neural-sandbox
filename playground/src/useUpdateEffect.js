import { useEffect, useRef } from 'react';

export function useUpdateEffect(effect, deps) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    return effect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}