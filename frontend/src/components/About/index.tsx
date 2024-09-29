import useFetchPosts from "../../hooks/useFetchPosts";

function About() {
  const { data, error } = useFetchPosts();
  return (
    <div>
      <h1>About</h1>
      {error && <p>{error}</p>}
      {data ? data.map((item) => (
        <p key={item.id}>
          {item.id}: {item.title}
        </p>
      )): (<p>データ読み込み中・・・</p>)}
    </div>
  );
}

export default About;