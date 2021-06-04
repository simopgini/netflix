import React from "react";

const YoutubeTrailerPage = () => {
  return (
    <iframe
      className="w-screen h-screen"
      src="https://www.youtube.com/embed/b1WHQTbJ7vE"
      page="_blank"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeTrailerPage;
