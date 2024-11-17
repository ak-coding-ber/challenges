import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function HomePage() {
  const {
    data: character,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <p>
      {character.firstName}
      <br />
      {character.lastName}
      <br />
      {character.twitterName}
      <br />
      {character.geoHash}
      <br />
      <br />
    </p>
  );
}
