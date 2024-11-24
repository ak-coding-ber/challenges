import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <StyledDiv>
      <StyledIntroSection>
        <StyledH1>The Lord of the Rings</StyledH1>
        <StyledParagraph>{introduction}</StyledParagraph>
      </StyledIntroSection>
      <StyledAllVolumesSection>
        <StyledH2>All Volumes</StyledH2>
        <StyledList>
          {volumes.map((volume) => (
            <StyledListItem key={uid()}>
              <StyledLink href={`/volumes/${volume.slug}`}>
                <StyledFigure>
                  <Image
                    width={85}
                    height={140}
                    src={`${volume.cover}`}
                    alt={`image of bookcover from ${volume.title}`}
                  />
                  <StyledFigCaption>{volume.title}</StyledFigCaption>
                </StyledFigure>
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledAllVolumesSection>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const StyledIntroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  gap: 18px;
`;

const StyledAllVolumesSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  gap: 16px;
`;

const StyledH1 = styled.h1`
  font: var(--font-headline-1);
  margin: 0;
`;

const StyledH2 = styled.h2`
  font: var(--font-headline-2);
  margin: 0;
`;

const StyledParagraph = styled.p`
  line-height: 20px;
  margin: 0;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
`;

const StyledListItem = styled.li`
  width: 85px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledFigure = styled.figure`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledFigCaption = styled.figcaption`
  font: var(--font-caption);
`;
