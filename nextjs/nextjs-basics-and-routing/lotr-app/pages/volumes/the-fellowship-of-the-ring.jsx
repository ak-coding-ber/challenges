import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";

export default function TheFellowshipOfTheRing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">All Titles</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        width={140}
        height={230}
        alt="Cover of the Book 'The Fellowship of the Ring'"
      />
      <br />
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </>
  );
}
