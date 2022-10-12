import { useCallback, useEffect, useRef, useState } from "react";
import StickerList from "../components/canvas/StickerList";
import styles from "../styles/Canvas.module.css";
import { printImage as printImagefn } from "../utils/canvas/addImage";
import {
  addMouseDownHandler,
  addMouseMoveHandler,
} from "../utils/canvas/mouseEvents";

export interface IDrawnImage {
  type: "background" | "sticker";
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export type IDrawnImages = IDrawnImage[];

interface ICoord {
  x: number;
  y: number;
}

const Canvas = () => {
  const canvasW = 500;
  const canvasH = 500;

  const canvas = useRef<HTMLCanvasElement | null>(null);

  // const imageInput = useRef<HTMLInputElement | null>(null);

  const printImage = printImagefn(canvas, 500, 500);

  // 이미지 그리기
  const [images, setImages] = useState<IDrawnImages>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  useEffect(() => {
    console.log("images", images, selectedImageIndex);

    const ctx = canvas.current?.getContext("2d");
    ctx?.clearRect(0, 0, canvasW, canvasH);

    images.map((image, index) => {
      if (index === selectedImageIndex) {
        printImage(image, true);
        return;
      }
      printImage(image, false);
    });
  }, [images, selectedImageIndex]);

  // 마우스 상태
  const isMouseDown = useRef(false);

  // 좌표
  const [mouseCoord, setMouseCoord] = useState<ICoord>({ x: 0, y: 0 });

  // 선택된 이미지 앞으로 가져오기
  const bringForward = useCallback(
    (index: number) => {
      if (index < 0) return;

      const newArr: IDrawnImages = [...images];
      newArr.splice(index, 1);
      newArr.push(images[index]);
      setImages(newArr);

      //
      console.log(newArr);
    },
    [images]
  );

  // 좌표값 계산
  useEffect(() => {
    if (images.length === 0) return;

    if (canvas.current) {
      const screenRect = canvas.current.getBoundingClientRect(); // 캔버스의 위치와 크기를 구한다.

      const x = mouseCoord.x - screenRect.left;
      const y = mouseCoord.y - screenRect.top;

      // 캔버스 밖에서 마우스 이벤트 일어난 경우 종료
      if (
        screenRect.left > mouseCoord.x ||
        screenRect.right < mouseCoord.x ||
        screenRect.top > mouseCoord.y ||
        screenRect.bottom < mouseCoord.y
      ) {
        return;
      }

      const searchSelected = (image: IDrawnImage) => {
        return (
          image.x <= x &&
          image.y <= y &&
          image.x + image.width >= x &&
          image.y + image.height >= y
        );
      };
      setSelectedImageIndex(images.findIndex(searchSelected));
      // bringForward(images.findIndex(searchSelected));
    }
  }, [mouseCoord]);

  // 캔버스 마우스 이벤트 등록
  useEffect(() => {
    addMouseDownHandler(setMouseCoord);
  }, []);
  useEffect(() => {
    document.onmousemove = (event) => {
      if (selectedImageIndex < 0) return;

      if (canvas.current) {
        const screenRect = canvas.current.getBoundingClientRect(); // 캔버스의 위치와 크기를 구한다.

        const x = event.clientX - screenRect.left;
        const y = event.clientY - screenRect.top;

        console.log(
          "x:",
          event.clientX,
          mouseCoord.x,
          "y:",
          event.clientY,
          mouseCoord.y
        );

        if (event.clientX > mouseCoord.x) {
          images[selectedImageIndex].x = event.clientX - mouseCoord.x;
        } else {
          images[selectedImageIndex].x = mouseCoord.x - event.clientX;
        }

        if (event.clientY > mouseCoord.y) {
          images[selectedImageIndex].y = event.clientY - mouseCoord.y;
        } else {
          images[selectedImageIndex].y = mouseCoord.y - event.clientY;
        }
        setImages(images);

        const ctx = canvas.current?.getContext("2d");
        ctx?.clearRect(0, 0, canvasW, canvasH);
        images.map((image, index) => {
          if (index === selectedImageIndex) {
            printImage(image, true);
            return;
          }
          printImage(image, false);
        });
      }
    };

    document.onmouseup = function (e) {
      setSelectedImageIndex(-1);
      isMouseDown.current = false;
    };

    if (!canvas.current) return;
    canvas.current.onmouseout = function (e) {
      setSelectedImageIndex(-1);
      isMouseDown.current = false;
    };
  }, [images, selectedImageIndex]);
  // 이미지 다운로드
  const saveImage = (event) => {
    event.target.href = canvas.current?.toDataURL("image/png", 1.0);
  };

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvas}
        width={canvasW}
        height={canvasH}
        className={styles.canvas}
      />
      <a href="" download="my_painting.png" onClick={saveImage}>
        다운로드
      </a>
      <StickerList images={images} setImages={setImages} />
    </div>
  );
};

export default Canvas;
