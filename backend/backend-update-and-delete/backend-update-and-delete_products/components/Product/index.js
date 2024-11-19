import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);

  // makes sure there is no attempt to fetch an item that just has been erased
  mutate();

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    } else {
      console.error(response.status);
    }

    const responseData = await response.json();
    alert(responseData.message);
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });

    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <button
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        ✏
      </button>
      <button type="button" onClick={() => handleDeleteProduct(id)}>
        <span role="img" aria-label="A cross indicating deletion">
          ❌
        </span>
      </button>{" "}
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          prevProductInfo={data}
          isEditMode={true}
        />
      )}
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews?.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
