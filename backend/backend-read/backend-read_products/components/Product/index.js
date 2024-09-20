import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length === 0 ? (
        <p style={{ color: "grey" }}>No Reviews yet.</p>
      ) : (
        <ul>
          <h2>Comments</h2>
          {data.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.title}</strong>
              <br />
              {review.text}
              <br />
              <br />
              Rating: {review.rating}
              <br />
              <br />
            </li>
          ))}
        </ul>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
