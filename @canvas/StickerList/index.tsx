/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import CursorFollower from '@canvas/CursorFollower';
import useCoord from '@canvas/useCoord';
import useDrawSticker from '@canvas/useDrawSticker';

import stickers from '../stickers';

const StickerList = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const cursorFollowerRef = useRef<HTMLDivElement | null>(null);

  const { coord } = useCoord();
  const { setCurrentSticker } = useDrawSticker();

  useEffect(() => {
    if (!cursorFollowerRef.current) return;

    const x = coord.x - cursorFollowerRef.current.clientWidth / 2;
    const y = coord.y - cursorFollowerRef.current.clientHeight / 2;

    cursorFollowerRef.current.style.left = `${x}px`;
    cursorFollowerRef.current.style.top = `${y}px`;

    setCurrentSticker({
      type: 'sticker',
      image: stickers[selectedIndex].src,
      x,
      y,
      width: stickers[selectedIndex].width,
      height: stickers[selectedIndex].height,
    });
  }, [coord]);

  return (
    <>
      <ul className="flex justify-between">
        {stickers.map(({ src }, index) => (
          <li key={src} className="border w-32 h-32 relative">
            <button
              type="button"
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <Image src={src} alt="" layout="fill" className="object-contain" />
            </button>
          </li>
        ))}
      </ul>
      <CursorFollower cursorFollowerRef={cursorFollowerRef} selectedIndex={selectedIndex} />
    </>
  );
};

export default StickerList;
