import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const URL = `https://swapi.py4e.com/api/people/${id}`;

  const fetcher = async (URL) => {
    const res = await fetch(URL);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading, error } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name ? data.name : "Unknown"}
        height={data.height ? data.height : "Unknown"}
        eyeColor={data.eye_color ? data.eye_color : "Unknown"}
        birthYear={data.birth_year ? data.birth_year : "Unknown"}
      />
    </Layout>
  );
}
