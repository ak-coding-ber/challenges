import Link from "../components/Link";

export default function HomePage({ lightsCount }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsCount} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
