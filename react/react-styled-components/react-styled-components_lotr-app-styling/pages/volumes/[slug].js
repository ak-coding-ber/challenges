import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <StyledMain>
      <StyledLink href="/volumes" $variant={"all_volumes"}>
        <Image
          src={"/icons/chevron-left.svg"}
          alt={"navigation arrow back"}
          width={24}
          height={24}
        />
        All Volumes
      </StyledLink>
      <StyledVolumeIntro>
        <StyledH1>{title}</StyledH1>
        <p>{description}</p>
      </StyledVolumeIntro>

      <StyledVolumeDetail $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <p className="book__number">{ordinal}: </p>
              <p className="book__title">{title}</p>
            </li>
          ))}
        </StyledList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledVolumeDetail>
      {previousVolume ? (
        <div>
          <StyledLink
            href={`/volumes/${previousVolume.slug}`}
            $variant={"previous"}
          >
            <Image
              src={"/icons/arrow-left.svg"}
              alt={"navigation arrow back"}
              width={24}
              height={24}
            />
            <div className="link__textcontainer">
              <p className="link__direction">Previous Volume: </p>
              <p className="link__volume-title">{previousVolume.title}</p>
            </div>
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`} $variant={"next"}>
            <div className="link__textcontainer">
              <p className="link__direction">Next Volume: </p>
              <p className="link__volume-title">{nextVolume.title}</p>
            </div>

            <Image
              src={"/icons/arrow-right.svg"}
              alt={"navigation arrow back"}
              width={24}
              height={24}
            />
          </StyledLink>
        </div>
      ) : null}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledH1 = styled.h1`
  font: var(--font-headline-1);
  margin: 0;
`;

const StyledVolumeDetail = styled.section`
  display: flex;
  background-color: ${({ $color }) => $color};
  color: var(--color-clouds);
  width: 100%;
  padding: 24px 32px;
  justify-content: space-between;
  gap: 10px;
`;

const StyledVolumeIntro = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  justify-content: space-between;
  gap: 18px;
  p {
    margin: 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    margin: 0;
  }

  .book__number {
    font: var(--font-caption--italic);
  }

  .book__title {
    font: var(--font-title);
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0 32px;
  gap: 8px;

  .link__direction {
    font: var(--font-caption--italic);
  }
  .link__volume-tit {
    font: var(--font-title);
  }

  p {
    margin: 0;
  }

  .link__textContainer {
    display: flex;
    flex-direction: column;
  }

  ${({ $variant }) =>
    $variant === "next" &&
    css`
      justify-content: flex-end;
      text-align: right;
    `};
`;
