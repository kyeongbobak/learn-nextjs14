import { API_URL } from "../app/(home)/page";

console.log(API_URL);

async function getMovie(id) {
  console.log(`Fetching movies: ${Date.now()}`);
  try {
    const response = await fetch(`${API_URL}/${id}`);
    // console.log(`Response status: ${response.status}`);
    // console.log(`Response content-type: ${response.headers.get("content-type")}`);

    const text = await response.text();
    // console.log(`Response text: ${text}`);

    if (response.headers.get("content-type")?.includes("application/json")) {
      return JSON.parse(text);
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    return { error: "Failed to fetch movie data" };
  }
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie.title)}</h6>;
}
