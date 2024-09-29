import { useEffect, useState } from "react";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function useFetchPosts() {
  const [data, setData] = useState<PostType[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setError("データの取得に失敗しました。"));
  }, []);

  return { data, error };
}

export default useFetchPosts;