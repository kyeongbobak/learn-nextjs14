export default function MoviesDetail(props) {
  const { params, searchParams } = props;
  return (
    <>
      <h1>Movie </h1>
      <strong>{params.id}</strong>
    </>
  );
}
