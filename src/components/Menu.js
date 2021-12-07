import styled from "@emotion/styled";
import { useState } from "react";

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  padding: 12px;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12), 0px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const Title = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
`;

export const TitleContent = styled.div`
  position: absolute;
  top: 61px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 24px;

  min-width: 75%;

  background: #ffffff;

  border: 4px solid #000000;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px 0px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;

export const SubtitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  background: #ffffff;

  border: 4px solid #000000;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.2);
`;

function Menu() {
  const [dis, setDis] = useState([false, false, false, false]);

  return (
    <MenuContainer>
      <TitleContainer onClick={() => setDis([!dis[0], false, false, false])}>
        <Title>Cursos y carreras</Title>
        {dis[0] && (
          <TitleContent>
            <Subtitle>Código</Subtitle>
            <Subtitle>Data</Subtitle>
            <Subtitle>UX/UI</Subtitle>
            <SubtitleContent>
              <Subtitle>UX Writing</Subtitle>
              <Subtitle>Research</Subtitle>
              <Subtitle>Figma</Subtitle>
            </SubtitleContent>
            <Subtitle>Producto</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer onClick={() => setDis([false, !dis[1], false, false])}>
        <Title>Lanzamientos</Title>
        {dis[1] && (
          <TitleContent>
            <Subtitle>Lanz 1</Subtitle>
            <Subtitle>Lanz 2</Subtitle>
            <Subtitle>Lanz 3</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer onClick={() => setDis([false, false, !dis[2], false])}>
        <Title>Proyectos</Title>
        {dis[2] && (
          <TitleContent>
            <Subtitle>Proy 1</Subtitle>
            <Subtitle>Proy 2</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer onClick={() => setDis([false, false, false, !dis[3]])}>
        <Title>Comunidad</Title>
        {dis[3] && (
          <TitleContent>
            <Subtitle>Contacto</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
    </MenuContainer>
  );
}

export default Menu;
