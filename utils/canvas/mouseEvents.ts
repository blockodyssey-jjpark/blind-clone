// import { MouseEventHandler } from "react";

export const addMouseDownHandler = (setCoord) => {
  document.onmousedown = (event) => {
    setCoord({ x: event.clientX, y: event.clientY });
  };
};

export const addMouseMoveHandler = ({
  images,
  setImages,
  selectedImageIndex,
}) => {
  document.onmousemove = (event) => {
    console.log(images, selectedImageIndex, images[selectedImageIndex]);

    // setCoord({ x: event.clientX, y: event.clientY });
  };
};
