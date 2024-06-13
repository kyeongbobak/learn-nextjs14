import { API_URL } from "../app/(home)/page";
import styles from "../styles/movievideo.module.css";

async function getVideos(id) {
  // console.log(`Fetching movie with id: ${id} at ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("something broke...");
  const res = await fetch(`${API_URL}/${id}/videos`);
  return await res.json();
}

//  일단 아래 {id} 가 원인
export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  // <h6>{JSON.stringify(videos)}</h6>
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      ))}
    </div>
  );
}
