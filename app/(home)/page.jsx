import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(API_URL);
  return await res.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}/${movie.title}`}>{movie.title}</Link>
        </li>
      ))}
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}
