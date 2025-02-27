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
  const index = currentImage
    ? images.findIndex((image) => image.src === currentImage.src)
    : -1;

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
            <div className="fixed right-0 top-0 m-4">
              <IconButton aria-label="Cerrar" onClick={() => show(undefined)}>
                x
              </IconButton>
            </div>
            {index >= 0 && (
              <div className="fixed right-0 bottom-0 m-4 flex gap-2">
                <IconButton
                  aria-label="Anterior"
                  disabled={index <= 0}
                  onClick={() => show(images[index - 1])}
                >
                  &lt;
                </IconButton>
                <IconButton
                  aria-label="Siguiente"
                  disabled={index >= images.length - 1}
                  onClick={() => show(images[index + 1])}
                >
                  &gt;
                </IconButton>
              </div>
            )}
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
