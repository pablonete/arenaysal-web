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
    <button onClick={() => show(props.src)}>
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
  show(imageUrl: string): void;
}>(undefined);

interface PopImageProviderProps extends React.PropsWithChildren {
  images: string[];
}

export function PopImageProvider({ children, images }: PopImageProviderProps) {
  const [currentImage, show] = React.useState("");
  const index = images.indexOf(currentImage);

  return (
    <PopImageContext.Provider value={{ show }}>
      {children}
      {currentImage &&
        createPortal(
          <button
            className="fixed top-0 left-0 z-10 h-full w-full bg-black/75"
            onClick={() => show("")}
          >
            <Image
              className="object-contain p-2"
              layout="fill"
              src={buildHref(currentImage)}
              alt={`TODO ${index + 1} of ${images.length}`}
            />
          </button>,
          document.body
        )}
    </PopImageContext.Provider>
  );
}
