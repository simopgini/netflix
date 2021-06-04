import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const HorizontalMovies = (props) => {
  return (
    <React.Fragment>
      <p className="relative text-white text-xl	pt-16 pb-3 pl-16">
        {props.title}
      </p>
      <div className="flex pl-16 space-x-2">
        {props.movies.map((movie, index) => {
          return (
            <GatsbyImage
              className="rounded w-48 transform hover:scale-125 hover:z-10 transition-all"
              image={movie}
              key={index}
              alt=""
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HorizontalMovies;
