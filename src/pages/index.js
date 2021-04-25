import React from "react";
import Helmet from "react-helmet";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import {
  SearchIcon,
  GiftIcon,
  BellIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/outline";

const MenuItem = (props) => {
  return <div className="text-white">{props.text}</div>;
};

const MovieCard = (props) => {
  return (
    <GatsbyImage
      className="rounded w-48"
      image={props.image}
      alt={props.text}
    />
  );
};

const MovieHorizontal = (props) => {
  return (
    <GatsbyImage
      className="rounded w-48"
      image={props.image}
      alt={props.text}
    />
  );
};

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "1.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image2: file(relativePath: { eq: "2.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image3: file(relativePath: { eq: "3.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }

    image4: file(relativePath: { eq: "4.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image5: file(relativePath: { eq: "5.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image6: file(relativePath: { eq: "6.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }

    image10: file(relativePath: { eq: "10.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image11: file(relativePath: { eq: "11.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image12: file(relativePath: { eq: "12.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image13: file(relativePath: { eq: "13.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image14: file(relativePath: { eq: "14.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image15: file(relativePath: { eq: "15.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image16: file(relativePath: { eq: "16.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image17: file(relativePath: { eq: "17.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image18: file(relativePath: { eq: "18.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image19: file(relativePath: { eq: "19.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image20: file(relativePath: { eq: "20.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image21: file(relativePath: { eq: "21.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image22: file(relativePath: { eq: "22.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image23: file(relativePath: { eq: "23.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image24: file(relativePath: { eq: "24.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image25: file(relativePath: { eq: "25.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image26: file(relativePath: { eq: "26.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image27: file(relativePath: { eq: "27.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

const IndexPage = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Netflix</title>
      </Helmet>

      <div className="absolute" style={{ zIndex: -1 }}>
        <StaticImage className="w-screen" src="../images/0-1.webp" />
      </div>

      <div className="flex justify-between px-16 pt-4 items-center">
        {/* 1 nav a sx */}
        <div className="flex space-x-4 items-center">
          <div className="text-white text-3xl pr-8">Netflix</div>
          <MenuItem text="Home" />
          <MenuItem text="TV Shows" />
          <MenuItem text="Movies" />
          <MenuItem text="New and Popular" />
          <MenuItem text="My List" />
        </div>

        <div className="flex space-x-4 text-white">
          <SearchIcon className="text-white h-7 w-7" />
          <GiftIcon className="text-white h-7 w-7" />
          <BellIcon className="text-white h-7 w-7" />
          <UserCircleIcon className="text-white h-7 w-7" />
        </div>
      </div>

      <div className="px-16 pt-40 max-w-lg">
        <StaticImage
          src="../images/0-2.webp"
          alt="and Bones"
          placeholder="blurred"
        />

        <p className="py-4 text-white">
          Dark forces conspire against orphan mapmaker Alina when she unleashes
          an extraordinary power that could change the fate of her war-torn
          world.
        </p>
        <div className="flex space-x-2">
          <div className="bg-white text-black rounded px-8 py-2">Play</div>
          <div className="bg-white bg-opacity-25 text-white rounded px-8 py-2">
            More info
          </div>
        </div>
      </div>

      <h2 className="text-white text-xl	pt-16 pb-2 pl-16">Netflix Originals</h2>
      <div className="flex pl-16 space-x-2">
        <MovieCard text="Scheda 1" image={getImage(props.data.image1)} />
        <MovieCard text="Scheda 2" image={getImage(props.data.image2)} />
        <MovieCard text="Scheda 3" image={getImage(props.data.image3)} />
        <MovieCard text="Scheda 4" image={getImage(props.data.image4)} />
        <MovieCard text="Scheda 5" image={getImage(props.data.image5)} />
        <MovieCard text="Scheda 6" image={getImage(props.data.image6)} />
      </div>

      <h2 className="text-white text-xl	pt-16 pb-2 pl-16">
        Continue Watching for Simona
      </h2>
      <div className="flex pl-16 space-x-2">
        <MovieHorizontal text="Scheda 1" image={getImage(props.data.image10)} />
        <MovieHorizontal text="Scheda 2" image={getImage(props.data.image11)} />
        <MovieHorizontal text="Scheda 3" image={getImage(props.data.image12)} />
        <MovieHorizontal text="Scheda 4" image={getImage(props.data.image13)} />
        <MovieHorizontal text="Scheda 5" image={getImage(props.data.image14)} />
        <MovieHorizontal text="Scheda 6" image={getImage(props.data.image15)} />
      </div>

      <h2 className="text-white text-xl	pt-16 pb-2 pl-16">Trending Now</h2>
      <div className="flex pl-16 space-x-2">
        <MovieHorizontal text="Scheda 1" image={getImage(props.data.image16)} />
        <MovieHorizontal text="Scheda 2" image={getImage(props.data.image17)} />
        <MovieHorizontal text="Scheda 3" image={getImage(props.data.image18)} />
        <MovieHorizontal text="Scheda 4" image={getImage(props.data.image19)} />
        <MovieHorizontal text="Scheda 5" image={getImage(props.data.image20)} />
        <MovieHorizontal text="Scheda 6" image={getImage(props.data.image21)} />
      </div>

      <h2 className="text-white text-xl	pt-16 pb-2 pl-16">My List</h2>
      <div className="flex pl-16 space-x-2">
        <MovieHorizontal text="Scheda 1" image={getImage(props.data.image22)} />
        <MovieHorizontal text="Scheda 2" image={getImage(props.data.image23)} />
        <MovieHorizontal text="Scheda 3" image={getImage(props.data.image24)} />
        <MovieHorizontal text="Scheda 4" image={getImage(props.data.image25)} />
        <MovieHorizontal text="Scheda 5" image={getImage(props.data.image26)} />
        <MovieHorizontal text="Scheda 6" image={getImage(props.data.image27)} />
      </div>

      <div className="flex space-x-44 px-16 pt-28 pb-18">
        <div className="text-white pb-4 text-gray-400">
          Audio and Subtitles
          <div className="text-white pt-4 pb-4 text-gray-400">Media Center</div>
          <div className="text-white pb-4 text-gray-400">Privacy</div>
          <div className="text-white pb-4 text-gray-400">Contact Us</div>
        </div>

        <div className="text-white pb-16 text-gray-400">
          Audio Description
          <div className="text-white pt-4 pb-4 text-gray-400">
            Investor Relations
          </div>
          <div className="text-white pb-4 text-gray-400">Legal Notices</div>
        </div>

        <div className="text-white pb-16 text-gray-400">
          Help Center
          <div className="text-white pt-4 pb-4 text-gray-400">Jobs</div>
          <div className="text-white pb-4 text-gray-400">
            Cookie Preferences
          </div>
        </div>

        <div className="text-white pb-16 text-gray-400">
          Gift Cards
          <div className="text-white pt-4 pb-4 text-gray-400">Terms of Use</div>
          <div className="text-white pb-4 text-gray-400">
            Corporate Information
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
