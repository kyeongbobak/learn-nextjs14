import { API_URL } from "../app/constants";
import styles from "../styles/credits.module.css";

export async function getCredits({ id }) {
  console.log(id);
  // console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/credits`);
  return await res.json();
}

// 아래 params 중괄호 문제
// { params }는 주어진 객체 { params: { id: '823464' }, searchParams: {} }에서 params라는 속성을 구조 분해하여 추출합니다. 따라서 params 변수는 { id: '823464' }와 같은 객체가 됩니다.

// 추출 개념에 대해서 다시 이해해보기 ???????/
export default async function MovieCredit({ id }) {
  const credits = await getCredits({ id });

  return (
    <div className={styles.container}>
      {credits.map((credit) => (
        <div className={styles.credit} key={credit.id}>
          <img className={styles.profileimage} src={credit.profile_path} alt="profile" />
          <p className={styles.description}>{credit.name}</p>
          <p>{credit.character}</p>
        </div>
      ))}
    </div>
  );
}
