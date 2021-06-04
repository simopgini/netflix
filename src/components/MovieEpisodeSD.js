import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { PlayIcon } from "@heroicons/react/outline";

const MovieEpisodeSD = (props) => {
  const [opacity, setOpacity] = useState("opacity-0");

  return (
    <div className="mx-12">
      <div className="flex items-center text-white py-12 border-b border-white border-opacity-20">
        <div className="pl-12 pr-12 text-gray-200 text-4xl">{props.number}</div>

        <div
          className="mr-12 relative"
          onMouseEnter={function () {
            setOpacity("opacity-100");
          }}
          onMouseLeave={function () {
            setOpacity("opacity-0");
          }}
        >
          <div
            className={`flex absolute items-center justify-center z-10 w-full h-full transition-opacity duration-500 ${opacity}`}
          >
            <PlayIcon className="w-14 h-14" />
          </div>
          <GatsbyImage
            className="rounded w-44"
            image={props.image}
            alt={props.title}
          />
        </div>

        <div className="flex-grow">
          <div className="flex justify-between mb-2 font-bold text-lg">
            {props.title}
            <div>{props.duration}</div>
          </div>
          <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieEpisodeSD;
