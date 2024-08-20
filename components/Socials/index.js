import React from "react";
import Image from "next/image";
import Button from "../Button";
import { buildHref } from "../../utils/image-url";

import data from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {data.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.imageSrc && (
            <Image
              alt="Social icon"
              width={24}
              height={24}
              src={buildHref(social.imageSrc)}
              className="mr-2"
            />
          )}
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
