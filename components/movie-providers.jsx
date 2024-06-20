import { API_URL } from "../app/constants";
import styles from "../styles/providers.module.css";

export async function getProviders({ id }) {
  const res = await fetch(`${API_URL}/${id}/providers`);
  const data = await res.json();

  const rent = data.KR?.rent || []; // data.KR가 존재하면 rent를 할당, 그렇지 않으면 빈 배열 할당

  console.log(rent);

  return rent;
}

export default async function MovieProviders({ id }) {
  const providers = await getProviders({ id });

  console.log(providers);

  return (
    <div className={styles.section}>
      <h4 className={styles.title}>Go See</h4>
      <div className={styles.contentsWrapper}>
        {providers.length === 0 ? (
          <p>해당 컨텐츠는 대여,구매 가능한 정보가 없습니다.</p>
        ) : (
          providers.map((provider, index) => (
            <div className={styles.providers} key={index}>
              <img className={styles.providerImage} src={provider.logo_path} alt={provider.provider_name} />
              <p className={styles.providerName}>{provider.provider_name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
