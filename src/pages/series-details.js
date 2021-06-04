import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { StaticImage, getImage } from "gatsby-plugin-image";
import {
  PlusIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import MovieCardSD from "../components/MovieCardSD";
import MovieEpisodeSD from "../components/MovieEpisodeSD";

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "s1.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image2: file(relativePath: { eq: "s2.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image3: file(relativePath: { eq: "s3.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }

    image4: file(relativePath: { eq: "s4.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image5: file(relativePath: { eq: "18.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image6: file(relativePath: { eq: "30.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }

    image7: file(relativePath: { eq: "37.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    image8: file(relativePath: { eq: "11.webp" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

// disegno un componente che contiene sia l'icona che il pop-up che lo stato

const RoundedIcon = (props) => {
  return (
    <div className="text-white rounded-full border-2 transition-colors hover:border-white border-gray-400 p-2 h-10 w-10">
      {props.icon}
    </div>
  );
};

const SeriesDetailsPage = (props) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Tv-series Details</title>
      </Helmet>

      <div className="flex flex-col justify-between h-96 relative">
        {/* background image */}
        <div className="absolute h-full">
          <StaticImage
            className="w-screen h-full"
            src="../images/sb-background.jpeg"
            alt="background"
          />
        </div>

        {/* background gradient */}
        <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-b from-transparent to-netflix-black"></div>

        {/* x icon, top right corner */}
        <div className="flex justify-end mx-12 mt-8 pb-8 z-10">
          <Link to="/">
            <RoundedIcon icon={<XIcon />} />
          </Link>
        </div>

        <StaticImage
          className="ml-12 w-96"
          src="../images/0-2.webp"
          alt="background"
        />

        {/* play and icons */}
        <div className="flex mx-12 py-8 justify-between z-10">
          <div className="flex space-x-4">
            <Link
              to="/youtube-trailer"
              className="bg-white px-10 py-2 font-semibold rounded transition-colors hover:bg-gray-200"
            >
              Play
            </Link>

            <RoundedIcon icon={<PlusIcon />} />
            <RoundedIcon icon={<ThumbUpIcon />} />
            <RoundedIcon icon={<ThumbDownIcon />} />
          </div>
        </div>
      </div>

      <div className="flex mx-12">
        <div>
          <div className="flex space-x-2">
            <div className="text-green-400">95% Match</div>
            <div className="text-white">2021</div>
            <div className="text-white">1 Season</div>
          </div>

          <div>
            <p className="flex py-2 text-white max-w-md text-lg">
              Dark forces conspire against orphan mapmaker Alina when she
              unleashes an extraordinary power that could change the fate of her
              war-torn world.
            </p>
          </div>
        </div>

        <div className="text-white text-sm">
          <div className="mb-2 ml-14">
            Cast: Jessie Mei Li, Archie Renaux, Ben Barnes, more
          </div>

          <div className="mb-2 ml-14">
            Genres: Fantasy TV shows, TV shows based on books, Teen TV show
          </div>

          <div className="ml-14"> This show is: Ominous</div>
        </div>
      </div>

      <div className="mx-12">
        <div className="flex justify-between text-white pb-4 border-b border-white border-opacity-20">
          <div className="font-semibold text-2xl pt-20">Episodes</div>
          <div className="text-xl pt-20">Season 1</div>
        </div>
      </div>

      <MovieEpisodeSD
        image={getImage(props.data.image1)}
        number="1"
        title="A Searing Burst of Light"
        text="Unwilling to be separated from Mal, Alina hatches a plan to join
              him on a perilous expedition through the Fold. Kaz chases a lead
              on a lucrative job."
        duration="52m"
      />

      <MovieEpisodeSD
        image={getImage(props.data.image2)}
        number="2"
        title="We’re All Someone’s Monster"
        text="Alina’s actions against the Volcra bring her to the attention of General Kirigan. Kaz runs into trouble while looking for safe passage across the Fold."
        duration="52m"
      />

      <MovieEpisodeSD
        image={getImage(props.data.image3)}
        number="3"
        title="The Making at the Heart of the World"
        text="Ensconced in the lap of luxury among the Grisha, Alina begins her training. The Crows - Kaz, Inej and Jesper - prepare for their risky journey."
        duration="47m"
      />

      <MovieEpisodeSD
        image={getImage(props.data.image4)}
        number="4"
        title="Otkazat’sya"
        text="As Kirigan takes Alina into his confidence, Mal volunteers for a dangerous tracking mission, and the Crows plot a heist to get into the Little Palace."
        duration="51m"
      />

      <h2 className="font-semibold text-2xl text-white mx-12 pt-10 pb-4">
        More Like This
      </h2>

      <div className="mx-12">
        <div className="flex space-x-4 mb-4">
          <MovieCardSD
            image={getImage(props.data.image5)}
            title="Cursed image"
            season="1 Season"
            year="2020"
            details="Armed with mysterious powers and a legendary sword, young rebel Nimue joins forces with charming mercenary Arthur on a mission to save her people."
          />

          <MovieCardSD
            image={getImage(props.data.image6)}
            title="The Last Kingdom image"
            season="3 Seasons"
            year="2018"
            details="As Alfred the Great defends his kingdom from Norse invaders, Uhtred - born a Saxon but raised by Vikings - seeks to claim his ancestral birthright."
          />

          <MovieCardSD
            image={getImage(props.data.image7)}
            title="The Lost Pirate Kingdom image"
            season="1 Season"
            year="2020"
            details="The real-life pirates of the Caribbean violently plunder the world’s riches and form a surprisingly egalitarian republic in this documentary series."
          />

          <MovieCardSD
            image={getImage(props.data.image8)}
            title="Vikings image"
            season="6 Seasons"
            year="2019"
            details="This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision."
          />
        </div>
      </div>

      <div className="text-white mx-12">
        <h2 className="font-semibold text-2xl pt-10 pb-4">
          About Shadow and Bone
        </h2>

        <div className="text-sm py-1">
          Cast: jessie Mei Li, Archie Renaux, Ben Barnes, Freddy Carter, Amita
          Suman, Kit Young, Danielle Galligan, Calahnan Skogman, Sujaya
          Dasgupta, Simon Sears
        </div>

        <div className="text-sm py-1">
          Genres: Fantasy TV Shows, TV Shows Based on Books, Teen TV Shows, TV
          Dramas, US TV Shows
        </div>

        <div className="text-sm py-1 pb-12">This show is: Ominuous</div>
      </div>
    </React.Fragment>
  );
};

export default SeriesDetailsPage;
