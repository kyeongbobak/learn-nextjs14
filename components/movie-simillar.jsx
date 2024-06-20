import { API_URL } from "../app/constants";
import styles from "../styles/simillar.module.css";

// useclient를 쓰려면, api 분리해야됌
export async function getSimillars({ id }) {
  const res = await fetch(`${API_URL}/${id}/similar`);
  return await res.json();
}

export default async function MovieSimillars({ id }) {
  const simillars = await getSimillars({ id });

  console.log(simillars);

  return (
    <>
      <div className={styles.section}>
        <h4 className={styles.title}>Recommand</h4>
        <div className={styles.contentsWrapper}>
          {simillars.length === 0 ? (
            <p>추천 영화 정보가 없습니다.</p>
          ) : (
            simillars.map((simillar) => (
              <div className={styles.contents} key={simillar.id}>
                <img className={styles.posterImage} src={simillar.poster_path} alt={simillar.original_title} />
                <div className={styles.description}>
                  <p className={styles.movieName}>{simillar.original_title}</p>
                  <p className={styles.movieAverage}>{simillar.vote_average.toFixed(1)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
