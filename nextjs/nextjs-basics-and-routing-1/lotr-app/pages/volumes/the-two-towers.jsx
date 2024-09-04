import Link from "next/link";
import { introduction, volumes } from "../../lib/data";

export default function TheTwoTowers() {
  const volume = volumes.find((volume) => volume.slug === "the-two-towers");

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
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>{" "}
      <br />
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </>
  );
}
