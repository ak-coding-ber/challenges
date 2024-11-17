import useSWR from "swr";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

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

  const {
    data: product,
    isLoading,
    error,
  } = useSWR(`/api/products/${router.query.id}`, fetcher);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>{`Product with id ${router.query.id} is not existing.`}</div>;
  }

  return (
    <p>
      id: {product.id}
      <br />
      Name: {product.name}
      <br />
      Category: {product.category}
      <br />
      Price: {`${product.price} ${product.currency}`}
      <br />
      Description: {product.description}
      <br />
      <br />
    </p>
  );
}
