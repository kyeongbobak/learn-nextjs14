import { API_URL } from "../../../(home)/page";

async function getMovies(id) {
  console.log(`Fetching movies : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideos(id) {
  console.log(`Fetching videos : ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MoviesDetail(props) {
  const { params, searchParams } = props;
  console.log("===============");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovies(params.id), getVideos(params.id)]);
  console.log("end fetching");
  console.log(params);
  console.log(searchParams);

  return (
    <>
      <h1>{movie.title}</h1>{" "}
    </>
  );
}
