import Movie from "../../components/movie";
import styles from "../../styles/hompage.module.css";

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

  console.log(movies.id);

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
      ))}
      {/* <div>{JSON.stringify(movies)}</div> */}
    </div>
  );
}
