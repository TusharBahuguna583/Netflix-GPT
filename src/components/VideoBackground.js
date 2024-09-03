import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId ] = useState(null);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/533535/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    setTrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        width="914"
        height="514"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
