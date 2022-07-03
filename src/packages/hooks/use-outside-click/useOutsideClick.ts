import { RefObject, useEffect } from "react";

type UseOutsideClickProps<T extends HTMLElement = HTMLElement> = {
  ref: RefObject<T>;
  callback: () => void;
};

export const useOutsideClick = ({ ref, callback }: UseOutsideClickProps) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
