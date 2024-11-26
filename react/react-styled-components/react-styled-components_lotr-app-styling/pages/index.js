import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledMain>
      <h1>LotR App</h1>
      <StyledLink href="/volumes">
        <StyledImage
          src={"/images/lotr_app_cover.jpg"}
          alt="image of the one ring under water"
          width={1504}
          height={1845}
        />
      </StyledLink>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  // subtract body padding to get image correctly centered vertically
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 32px;
  h1 {
    font: var(--font-headline-1);
    margin: 0 0 32px 0;
    text-align: center;
    line-height: 1.5;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`;

const StyledLink = styled(Link)`
  display: block;
  box-shadow: var(--box-shadow-book);

  :hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
