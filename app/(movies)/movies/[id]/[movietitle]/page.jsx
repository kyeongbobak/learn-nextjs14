import { Suspense } from "react";
import MovieVideos from "../../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";

export async function generateMetadata({ params }) {
  const { id } = params;
  const movie = await getMovie({ id });
  return {
    title: movie.title,
  };
}

export default function MoviesDetail({ params }) {
  return (
    <>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </>
  );
}