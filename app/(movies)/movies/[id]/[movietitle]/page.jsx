import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";

export const metadata = {
  title: "Home",
};

export default function MoviesDetail(props) {
  const { params } = props;
  metadata.title = params.movietitle.replace(/[^a-zA-Z]/g, "");

  return (
    <>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={params.id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideos id={params.id}></MovieVideos>
      </Suspense>
    </>
  );
}
