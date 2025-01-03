import useSWR from "swr";

export default function Products() {
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

  const { data: products, isLoading, error } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
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
            </li>
          );
        })}
      </ul>
    </>
  );
}
