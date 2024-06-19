import { API_URL } from "../app/(home)/page";
import styles from "../styles/movieinfo.module.css";

export async function getMovie({ id }) {
  console.log(id);
  // console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie({ id });
  // <h6>{JSON.stringify(movie)}</h6>
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3> ☆ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
