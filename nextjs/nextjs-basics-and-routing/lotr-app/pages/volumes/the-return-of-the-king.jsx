import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
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
        src="/images/the-return-of-the-king.png"
        width={140}
        height={230}
        alt="Cover of the Book 'The Return of the King'"
      />
      <br />
      <Link href="/volumes/the-two-towers" width="140px">
        Previous Volume
      </Link>
    </>
  );
}
