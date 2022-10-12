import { useCallback, useEffect, useRef, useState } from "react";
import StickerList from "../components/canvas/StickerList";
import styles from "../styles/Canvas.module.css";
import { printImage as printImagefn } from "../utils/canvas/addImage";
import { addMouseDownHandler } from "../utils/canvas/mouseEvents";

export interface IDrawnImage {
  type: "background" | "sticker";
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export type IDrawnImages = IDrawnImage[];

const Canvas = () => {
  const canvasW = 500;
  const canvasH = 500;

  const canvas = useRef<HTMLCanvasElement | null>(null);
  // const imageInput = useRef<HTMLInputElement | null>(null);

  const printImage = printImagefn(canvas, 500, 500);

  interface ICoord {
    x: number;
    y: number;
  }

  // 이미지 그리기
  const [images, setImages] = useState<IDrawnImages>([]);
  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    ctx?.clearRect(0, 0, canvasW, canvasH);

    images.map((image, index) => {
      if (index === selectedImage) {
        printImage(image, true);
        return;
      }
      printImage(image, false);
    });
  }, [images]);

  // 좌표
  const [mouseCoord, setMouseCoord] = useState<ICoord>({ x: 0, y: 0 });

  // 캔버스 마우스 이벤트 등록
  useEffect(() => {
    addMouseDownHandler(setMouseCoord);
  }, []);

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
  const [selectedImage, setSelectedImage] = useState(-1);
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
      setSelectedImage(images.findIndex(searchSelected));
      bringForward(images.findIndex(searchSelected));
    }
  }, [mouseCoord]);

  //-----------------------------------------------

  // const uploadBackgroundImage = () => {
  //   imageInput.current?.click();
  // };
  // const changeBackgroundImage = async (e) => {
  //   const file = e.target.files[0];
  //   const src = await getImageSrc(file);

  //   if (drawnImages.length === 0) {
  //     setDrawnImages([{ type: "background", src, width: 500, height: 500 }]);
  //     return;
  //   }

  //   if (drawnImages.length > 0) {
  //     if (drawnImages[0].type === "background") {
  //       const newArr = [...drawnImages];
  //       newArr[0].src = src;
  //       setDrawnImages(newArr);
  //       return;
  //     }
  //     const newArr = [...drawnImages];
  //     newArr.unshift({ type: "background", src, width: 500, height: 500 });
  //     setDrawnImages(newArr);
  //     return;
  //   }
  // };

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
      {/* <input
        ref={imageInput}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={changeBackgroundImage}
        hidden
      /> */}
      {/* <button type="button" onClick={uploadBackgroundImage}>
        add image
      </button> */}
      <a href="" download="my_painting.png" onClick={saveImage}>
        다운로드
      </a>
      <StickerList images={images} setImages={setImages} />
    </div>
  );
};

export default Canvas;
