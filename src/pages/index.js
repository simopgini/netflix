import React from "react";
import Helmet from "react-helmet";
import { StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import {
  SearchIcon,
  GiftIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import HorizontalMovies from "../components/HorizontalMovies";
import VerticalMovies from "../components/VerticalMovies";
import MenuItem from "../components/MenuItem";

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "1.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image2: file(relativePath: { eq: "sex-education.jpg" }) {
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

      {/* background image */}
      <div className="absolute top-0" style={{ zIndex: -1 }}>
        <StaticImage
          className="w-screen"
          src="../images/0-1.webp"
          alt="background"
        />
        <div className="absolute top-0 h-1/3 w-full bg-gradient-to-b from-netflix-black  to-transparent"></div>
        {/* background gradient - image shadow*/}
        <div className="absolute bottom-0 h-1/5 w-full bg-gradient-to-b from-transparent to-netflix-black"></div>
      </div>

      <div className="flex justify-between mx-16 mt-4 items-center">
        {/* 1 nav a sx */}
        <div className="flex space-x-4 items-center">
          <StaticImage
            className="w-32 mr-12"
            src="../images/netflix_logo.svg"
            alt="netflix logo"
            placeholder="blurred"
          />

          <MenuItem text="Home" />
          <MenuItem text="TV Shows" />
          <MenuItem text="Movies" />
          <MenuItem text="New and Popular" />
          <MenuItem text="My List" />
        </div>

        {/* icons on the top right hand corner */}
        <div className="flex space-x-4 text-white">
          <div className="cursor-pointer">
            <SearchIcon className=" text-white h-7 w-7" />
          </div>
          <div className="cursor-pointer">
            <GiftIcon className="text-white h-7 w-7" />
          </div>

          <div className="cursor-pointer">
            <BellIcon className="text-white h-7 w-7" />
          </div>

          <div className="cursor-pointer">
            <UserCircleIcon className="text-white h-7 w-7" />
          </div>
        </div>
      </div>

      <div className="mx-16 pt-40 max-w-xl">
        <StaticImage
          src="../images/0-2.webp"
          alt="and Bones"
          placeholder="blurred"
        />

        <p className="py-5 text-white text-xl">
          Dark forces conspire against orphan mapmaker Alina when she unleashes
          an extraordinary power that could change the fate of her war-torn
          world.
        </p>

        {/* buttons */}

        <div className="flex space-x-2">
          <Link
            to="/youtube-trailer"
            className="relative z-10 bg-white text-black rounded px-8 py-2 font-semibold transition-colors hover:bg-gray-200"
          >
            Play
          </Link>

          <Link
            to="/series-details"
            className="relative z-10 font-semibold text-white bg-white bg-opacity-30 rounded px-8 py-2 transition-opacity hover:bg-opacity-10"
          >
            More info
          </Link>
        </div>
      </div>

      <VerticalMovies
        title="Netflix Originals"
        movies={[
          getImage(props.data.image1),
          getImage(props.data.image2),
          getImage(props.data.image3),
          getImage(props.data.image4),
          getImage(props.data.image5),
          getImage(props.data.image6),
        ]}
      />

      <HorizontalMovies
        title="Continue Watching for Simona"
        movies={[
          getImage(props.data.image10),
          getImage(props.data.image11),
          getImage(props.data.image12),
          getImage(props.data.image13),
          getImage(props.data.image14),
          getImage(props.data.image15),
        ]}
      />

      <HorizontalMovies
        title="Trending Now"
        movies={[
          getImage(props.data.image16),
          getImage(props.data.image17),
          getImage(props.data.image18),
          getImage(props.data.image19),
          getImage(props.data.image20),
          getImage(props.data.image21),
        ]}
      />

      <HorizontalMovies
        title="My List"
        movies={[
          getImage(props.data.image22),
          getImage(props.data.image23),
          getImage(props.data.image24),
          getImage(props.data.image25),
          getImage(props.data.image26),
          getImage(props.data.image27),
        ]}
      />

      {/* footer */}
      <div className="flex space-x-44 px-16 pt-28 pb-18">
        <div className="pb-4 text-gray-400">
          Audio and Subtitles
          <div className="pt-4 pb-4 text-gray-400">Media Center</div>
          <div className="pb-4 text-gray-400">Privacy</div>
          <div className="pb-4 text-gray-400">Contact Us</div>
        </div>

        <div className="pb-16 text-gray-400">
          Audio Description
          <div className="pt-4 pb-4 text-gray-400">Investor Relations</div>
          <div className="pb-4 text-gray-400">Legal Notices</div>
        </div>

        <div className="pb-16 text-gray-400">
          Help Center
          <div className="pt-4 pb-4 text-gray-400">Jobs</div>
          <div className="pb-4 text-gray-400">Cookie Preferences</div>
        </div>

        <div className="pb-16 text-gray-400">
          Gift Cards
          <div className="pt-4 pb-4 text-gray-400">Terms of Use</div>
          <div className="pb-4 text-gray-400">Corporate Information</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
