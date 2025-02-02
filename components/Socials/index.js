import React from "react";
import Image from "next/image";
import Button from "../Button";
import { buildHref } from "../../utils/image-url";

import data from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const { theme } = useTheme();

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {data.socials.map((social, index) => {
        const iconSrc = theme === "dark" && social.darkIconSrc || social.iconSrc;
        return <Button key={index} onClick={() => window.open(social.link)}>
          {iconSrc && (
            <Image
              alt="Social icon"
              width={24}
              height={24}
              src={buildHref(iconSrc)}
              className="mr-2"
            />
          )}
          {social.title}
        </Button>
      })}
    </div>
  );
};

export default Socials;
