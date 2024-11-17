import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        width={140}
        height={230}
        alt={`Cover of the Book '${volume.title}'`}
      />
      <br />
      {previousVolume ? (
        <>
          <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>{" "}
          <br />
        </>
      ) : null}
      {nextVolume ? (
        <>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
          <br />
        </>
      ) : null}
      <Link href="../volumes">Show All Volumes</Link>
    </>
  );
}
