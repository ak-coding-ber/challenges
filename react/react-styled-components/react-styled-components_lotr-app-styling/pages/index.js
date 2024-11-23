import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledMain>
      <h1>LotR App</h1>
      <Link href="/volumes">
        <Image
          src={"/images/lotr_app_cover.jpg"}
          alt="image of the one ring under water"
          width={1504}
          height={1845}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        ></Image>
      </Link>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 0px 32px;
  h1 {
    font: var(--font-headline-1);
    margin: 0 0 32px 0;
    text-align: center;
    line-height: 1.5;
  }
`;
