import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList() {
  const { data, isLoading, mutate } = useSWR("/api/products");

  // make sure the product list is up to date after deletions and doesn't show deleted items
  mutate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
