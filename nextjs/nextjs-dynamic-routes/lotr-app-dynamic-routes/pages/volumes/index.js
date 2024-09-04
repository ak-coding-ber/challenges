import { introduction, volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function GetRandomVolume() {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  function handleRandomButtonClick() {
    const randomVolume = GetRandomVolume(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomButtonClick}>Show Random Volume</button>
    </>
  );
}
