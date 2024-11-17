import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, handleToggle }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={light.isOn}
            id={light.id}
            onToggle={() => handleToggle(light.id)}
          />
        </li>
      ))}
    </StyledLights>
  );
}
