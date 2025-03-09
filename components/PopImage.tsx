import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { buildHref } from "../utils/image-url";
import ImageGallery from "react-image-gallery";

interface PopImageProps {
  src: string;
  alt: string;
}

export function PopImage(props: PopImageProps) {
  const { show } = React.useContext(PopImageContext);
  return (
    <button onClick={() => show(props)}>
      <Image
        className="object-cover hover:scale-110 transition-all ease-out duration-300"
        layout="fill"
        alt={props.alt}
        src={buildHref(props.src)}
      />
    </button>
  );
}

const PopImageContext = React.createContext<{
  show(image: PopImageProps): void;
}>(undefined);

interface PopImageProviderProps extends React.PropsWithChildren {
  images: PopImageProps[];
}

export function PopImageProvider({ children, images }: PopImageProviderProps) {
  const [currentImage, show] = React.useState<PopImageProps>(undefined);
  const index = currentImage
    ? images.findIndex((image) => image.src === currentImage.src)
    : -1;

  const galleryImages = images.map((image) => ({
    original: buildHref(image.src),
  }));

  return (
    <PopImageContext.Provider value={{ show }}>
      {children}
      {currentImage &&
        createPortal(
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-black/75">
            <ImageGallery
              items={galleryImages}
              onClick={() => show(undefined)}
              showBullets
              showIndex
              showThumbnails={false}
              startIndex={index}
            />
            <button
              className="w-full h-full"
              onClick={() => show(undefined)}
            ></button>
          </div>,
          document.body
        )}
    </PopImageContext.Provider>
  );
}

function IconButton({
  children,
  onClick,
  disabled,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  const disabledNames = disabled ? "" : "bg-white hover:bg-gray-100";
  return (
    <button
      className={`rounded-lg px-4 py-2 ${disabledNames}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
