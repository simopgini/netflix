import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { CheckIcon } from "@heroicons/react/outline";

const MovieCardSD = (props) => {
  return (
    <div className="bg-white bg-opacity-10 rounded text-white transform motion-safe:hover:scale-110">
      <div className="relative">
        {/* img in the box */}
        <GatsbyImage
          className="rounded"
          image={props.image}
          alt={props.title}
        />

        {/* season on the top-right hand corner */}
        <div className="absolute top-0 right-0 px-4 py-2 z-10 filter drop-shadow-2xl">
          {props.season}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-end pb-4">
          <div className="text-lg">{props.year}</div>
          <CheckIcon className="rounded-full border-2 transition-colors hover:border-white  border-gray-400 p-2 text-white h-10 w-10" />
        </div>
        <div className="text-gray-200 mb-4">{props.details}</div>
      </div>
    </div>
  );
};

export default MovieCardSD;
