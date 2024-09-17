import { useCallback, useState } from "react";

function useChange(value: number = 0): [number, (index: number) => void] {
  const [change, setChange] = useState<number>(value);
  const setChangeMethod = useCallback((index: number) => {
    setChange(index);
  }, []);
  return [change, setChangeMethod];
}

export default useChange;
