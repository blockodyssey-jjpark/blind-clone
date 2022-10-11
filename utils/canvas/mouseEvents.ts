// import { MouseEventHandler } from "react";

export const addMouseDownHandler = (setCoord) => {
  document.onmousedown = (event) => {
    setCoord({ x: event.clientX, y: event.clientY });
  };
};
