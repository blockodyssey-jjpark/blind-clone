/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEventHandler, useRef } from 'react';

import drawImage from '@canvas/drawImage';
import getBackgroundImage from '@canvas/getBackgroundImage';
import StickerList from '@canvas/StickerList';
import useCoord from '@canvas/useCoord';
import useDrawSticker from '@canvas/useDrawSticker';

const Canvas = () => {
  // 캔버스 기본 설정
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const canvasW = 800;
  const canvasH = 600;

  // 이미지 다운로드
  const saveImage: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const target = event.target as HTMLAnchorElement;
    const image = canvas.current?.toDataURL('image/png', 1.0);

    if (image) target.setAttribute('href', image);
  };

  const { getCoordHandler } = useCoord();
  const { drawSticker } = useDrawSticker();

  // 배경 이미지 업로드
  const uploadBackgroundImage = async () => {
    if (!canvas.current) return;

    const image = await getBackgroundImage();
    drawImage({ type: 'background', image, x: 0, y: 0, width: canvasW, height: canvasH }, canvas.current);
  };

  return (
    <div style={{ width: canvasW }}>
      <div className="flex justify-between">
        <button type="button" onClick={uploadBackgroundImage} className=" px-4 py-3 rounded bg-slate-200">
          배경이미지 업로드
        </button>
        <a
          href="#"
          download="canvas.png"
          onClick={saveImage}
          className="bg-red-100 px-4 py-3 rounded inline-block ml-2"
        >
          다운로드
        </a>
      </div>
      <canvas
        ref={canvas}
        width={canvasW}
        height={canvasH}
        className="border my-3"
        onClick={drawSticker}
        onMouseMove={getCoordHandler}
      />
      <StickerList />
    </div>
  );
};

export default Canvas;
