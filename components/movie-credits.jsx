import { API_URL } from "../app/constants";
import styles from "../styles/credits.module.css";

export async function getCredits({ id }) {
  // console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/credits`);
  return await res.json();
}

// 아래 params 중괄호 문제
// { params }는 주어진 객체 { params: { id: '823464' }, searchParams: {} }에서 params라는 속성을 구조 분해하여 추출합니다. 따라서 params 변수는 { id: '823464' }와 같은 객체가 됩니다.

// 추출 개념에 대해서 다시 이해해보기 ???????/
export default async function MovieCredit({ id }) {
  const credits = await getCredits({ id });

  return (
    <>
      <div className={styles.section}>
        <h3 className={styles.title}>Actor</h3>
        <div className={styles.contentsWrapper}>
          {credits.map((credit) => (
            <div className={styles.contents} key={credit.id}>
              <img className={styles.actorImage} src={credit.profile_path} alt="profile" />
              <div className={styles.description}>
                <p className={styles.actorCharacter}>{credit.character}</p>
                <p className={styles.actorName}>{credit.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
