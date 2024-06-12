import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
  // console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
