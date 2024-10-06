import { useQuery } from "@tanstack/react-query";

function TanstackQuery() {
  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      return await response.json();
    }
  })

  if (isPending) return "Loading....";

  if (error) return "error has occurred:" + error.message;

  return (
    <div>
      {data.body}
    </div>
  );
}

export default TanstackQuery;