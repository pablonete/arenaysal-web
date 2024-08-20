import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export function PopImage(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Image
          className="object-cover hover:scale-110 transition-all ease-out duration-300"
          layout="fill"
          {...props}
        />
      </button>
      {open &&
        createPortal(
          <button
            className="fixed top-0 left-0 z-10 h-full w-full bg-black/75"
            onClick={() => setOpen(false)}
          >
            <Image className="object-contain p-2" layout="fill" {...props} />
          </button>,
          document.body
        )}
    </>
  );
}
