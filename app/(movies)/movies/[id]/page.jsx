import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";

async function getVideos(id) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MoviesDetail(props) {
  const { params, searchParams } = props;
  const videos = await getVideos(params.id);
  console.log(params);
  console.log(searchParams);

  return (
    <>
      <p>{JSON.stringify(videos)}</p>

      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id}></MovieInfo>
      </Suspense>
    </>
  );
}
