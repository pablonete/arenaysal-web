import React from "react";
import { PopImage } from "../PopImage";

interface Props {
  img: string;
  name: string;
  description: string;
}

const WorkCard = ({ img, name, description }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0">
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <PopImage alt={name} src={img} />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
