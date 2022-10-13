import { atom, useAtom } from 'jotai';
import { MouseEventHandler, useCallback } from 'react';

import drawImage from './drawImage';
import { IImageObj } from './types';

const stickerAtom = atom<IImageObj>({ type: 'sticker', image: '', x: 0, y: 0, width: 0, height: 0 });

const useDrawSticker = () => {
  const [currentSticker, setCurrentSticker] = useAtom(stickerAtom);

  const drawSticker: MouseEventHandler<HTMLCanvasElement> = useCallback(
    (event) => {
      drawImage(currentSticker, event.target as HTMLCanvasElement);
    },
    [currentSticker],
  );

  return { currentSticker, setCurrentSticker, drawSticker };
};

export default useDrawSticker;
