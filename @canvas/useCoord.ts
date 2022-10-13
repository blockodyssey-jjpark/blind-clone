import { atom, useAtom } from 'jotai';
import { MouseEventHandler } from 'react';

const coordAtom = atom({ x: 0, y: 0 });

const useCoord = () => {
  const [coord, setCoord] = useAtom(coordAtom);

  const getCoordHandler: MouseEventHandler<HTMLCanvasElement> = (event) => {
    requestAnimationFrame(() => setCoord({ x: event.clientX, y: event.clientY }));
  };

  return { coord, getCoordHandler };
};

export default useCoord;
