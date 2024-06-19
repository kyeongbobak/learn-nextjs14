import { API_URL } from "../../../../constants";

export async function getProviders(id) {
  const res = await fetch(`${API_URL}/${id}/providers`);
  const data = await res.json();

  // 객체의 키들을 배열로 반환
  const rentProviders = Object.keys(data).map((countryCode) => {
    return data[countryCode].rent;
  });

  const rentArray = rentProviders.flatMap((rent) => rent);

  return rentArray;
}

export default async function Providers({ params }) {
  const { id } = params;
  const providers = await getProviders(id);
  console.log(providers);

  return (
    <div>
      {providers.map((provider, index) => (
        <div key={index}>
          {/* <img src={provider.logo_path} alt="logo" /> */}
          <p>{provider.provider_name}</p>
        </div>
      ))}
      {/* <div>{JSON.stringify(providers)}</div> */}
    </div>
  );
}
