import { MutableRefObject } from "react";
import { IDrawnImage } from "../../pages/canvas";

// export const getImageSrc = (file) => {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = (e) => {
//       const base = e.target?.result;
//       if (!base) {
//         reject("이미지 업로드에 실패했습니다.");
//         return;
//       }
//       resolve(base);
//       return;
//     };
//     fileReader.onerror = () => {
//       reject("이미지 업로드에 실패했습니다.");
//       return;
//     };
//   });
// };

export const printImage = (
  canvas: MutableRefObject<HTMLCanvasElement | null>,
  canvasW: number,
  canvasH: number
) => {
  return ({ src, width, height, x, y }: IDrawnImage, isLast: boolean) => {
    const image = new Image();
    image.src = src.toString();
    image.onload = () => {
      // 이미지 사이즈 계산
      const originW = image.naturalWidth;
      const originH = image.naturalHeight;

      let resizeW = width;
      let resizeH = height;

      if (originW > originH) {
        resizeW = (resizeH * originW) / originH;
      }
      if (originW < originH) {
        resizeH = (resizeW * originH) / originW;
      }

      const ctx = canvas.current?.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "#f00";
        ctx.lineWidth = 2;

        ctx.drawImage(
          image,
          x, // 정중앙 -((resizeW - canvasW) / 2)
          y, // -((resizeH - canvasH) / 2)
          resizeW,
          resizeH
        );
        if (isLast) {
          ctx.strokeRect(x - 1, y - 1, resizeW + 1, resizeH + 1);
        }
      }
      return;
    };
  };
};
