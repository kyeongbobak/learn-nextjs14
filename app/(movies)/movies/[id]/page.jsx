import { API_URL } from "../../../(home)/page";

// await new Promise((resolve) => setTimeout(resolve, 5000));
async function getMovies(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MoviesDetail(props) {
  const { params, searchParams } = props;

  const movie = await getMovies(params.id);
  console.log(params);
  console.log(searchParams);

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
