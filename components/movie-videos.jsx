import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
  console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  const text = await res.text();
  const data = JSON.parse(text);

  return data;
}

//  일단 아래 {id} 가 원인
export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
