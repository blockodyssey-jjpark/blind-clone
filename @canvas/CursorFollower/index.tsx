import Image from 'next/image';
import { MutableRefObject } from 'react';

import stickers from '../stickers';

const CursorFollower = ({
  cursorFollowerRef,
  selectedIndex,
}: {
  cursorFollowerRef: MutableRefObject<HTMLDivElement | null>;
  selectedIndex: number;
}) => {
  if (selectedIndex < 0) return null;
  if (!stickers[selectedIndex]) return null;

  return (
    <div ref={cursorFollowerRef} className="fixed top-0 left-0" style={{ pointerEvents: 'none' }}>
      <Image
        src={stickers[selectedIndex].src}
        width={stickers[selectedIndex].width}
        height={stickers[selectedIndex].height}
        alt=""
        layout="fixed"
        quality={100}
      />
    </div>
  );
};

export default CursorFollower;
