import { IImageObj } from './types';

const resizeImage = (image: HTMLImageElement, canvasW: number, canvasH: number) => {
  // 이미지 사이즈 계산
  const originW = image.naturalWidth;
  const originH = image.naturalHeight;

  let resizeW = canvasW;
  let resizeH = canvasH;

  if (originW > originH) {
    resizeW = (resizeH * originW) / originH;
  }
  if (originW < originH) {
    resizeH = (resizeW * originH) / originW;
  }

  return { resizeW, resizeH };
};

const drawImage = (imageObj: IImageObj, canvas: HTMLCanvasElement) => {
  const image = new Image();
  image.src = imageObj.image;
  image.onload = () => {
    const ctx = canvas.getContext('2d');
    const screenRect = canvas.getBoundingClientRect(); // 캔버스의 위치와 크기를 구한다.
    const { width: canvasW, height: canvasH, top: canvasTop, left: cavnasLeft } = screenRect;

    if (ctx) {
      ctx.beginPath();
      ctx.strokeStyle = '#f00';
      ctx.lineWidth = 2;

      const { type, x, y, width, height } = imageObj;
      const { resizeW, resizeH } = resizeImage(image, canvasW, canvasH);

      switch (type) {
        case 'background':
          ctx.drawImage(image, x - (resizeW - canvasW) / 2, y - (resizeH - canvasH) / 2, resizeW, resizeH);
          break;
        case 'sticker':
          ctx.drawImage(image, x - cavnasLeft, y - canvasTop, width, height);
          break;
        default:
          throw new Error('이미지 타입을 지정해주세요.');
      }
    }
  };
};

export default drawImage;
