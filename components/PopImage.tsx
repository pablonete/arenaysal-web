import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { buildHref } from "../utils/image-url";

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
  // TODO const index = images.findIndex((image) => image.src === currentImage.src);

  return (
    <PopImageContext.Provider value={{ show }}>
      {children}
      {currentImage &&
        createPortal(
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-black/75">
            <Image
              className="object-contain p-2 pointer-events-none"
              layout="fill"
              src={buildHref(currentImage.src)}
              alt={currentImage.alt}
            />
            <button
              className="fixed right-0 m-4 bg-white hover:bg-gray-100 rounded-lg px-4 py-2"
              aria-label="Cerrar"
              onClick={() => show(undefined)}
            >
              x
            </button>
          </div>,
          document.body
        )}
    </PopImageContext.Provider>
  );
}
