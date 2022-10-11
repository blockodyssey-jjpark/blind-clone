import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import stickers from "../../assets/stickers";
import { IDrawnImages } from "../../pages/canvas";

import styles from "./stickerList.module.css";

interface IProps {
  images: IDrawnImages;
  setImages: Dispatch<SetStateAction<IDrawnImages>>;
}

const StickerList = ({ images, setImages }: IProps) => {
  return (
    <ul className={styles.list}>
      {stickers.map((sticker) => {
        const { img, width, height } = sticker;

        return (
          <li key={img.src} className={styles.item}>
            <button
              type="button"
              className={styles.itemBtn}
              onClick={() => {
                const newArr: IDrawnImages = [
                  ...images,
                  {
                    type: "sticker",
                    src: sticker.img.src,
                    width,
                    height,
                    x: 0,
                    y: 0,
                  },
                ];

                setImages(newArr);
              }}
            >
              <Image
                src={img.src}
                alt=""
                layout="fill"
                className={styles.itemImg}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default StickerList;
