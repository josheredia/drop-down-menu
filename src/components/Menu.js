import styled from "@emotion/styled";
import { useState } from "react";

export const MenuContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12), 0px 2px 3px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  padding: 12px;
  color: #000000;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  position: absolute;
  top: 61px;
  left: 0px;
  display: flex;
  flex-direction: column;

  min-width: 75%;

  background: #ffffff;

  border: 4px solid #000000;

  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    position: relative;
    top: 0px;
  }
`;

export const Subtitle = styled.button`
  display: flex;
  justify-content: flex-start;
  padding: 12px 24px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
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
  const [displayTitle, setDisplayTitle] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [displaySubtitle, setDisplaySubtitle] = useState(false);

  return (
    <MenuContainer>
      <TitleContainer
        style={
          displayTitle[0]
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Title
          style={displayTitle[0] ? { color: "white" } : { color: "black" }}
          onClick={() =>
            setDisplayTitle([!displayTitle[0], false, false, false])
          }
        >
          Cursos y carreras
        </Title>
        {displayTitle[0] && (
          <TitleContent>
            <Subtitle
              onClick={() =>
                setDisplayTitle([!displayTitle[0], false, false, false])
              }
            >
              Código
            </Subtitle>
            <Subtitle
              onClick={() =>
                setDisplayTitle([!displayTitle[0], false, false, false])
              }
            >
              Data
            </Subtitle>
            <Subtitle
              style={
                displaySubtitle
                  ? { backgroundColor: "black", color: "white" }
                  : { color: "black" }
              }
              onClick={() => setDisplaySubtitle(!displaySubtitle)}
            >
              UX/UI
              <p> →</p>
            </Subtitle>
            {displaySubtitle && (
              <SubtitleContent>
                <Subtitle>UX Writing</Subtitle>
                <Subtitle>Research</Subtitle>
                <Subtitle>Figma</Subtitle>
              </SubtitleContent>
            )}
            <Subtitle
              onClick={() =>
                setDisplayTitle([!displayTitle[0], false, false, false])
              }
            >
              Producto
            </Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer
        onClick={() => setDisplayTitle([false, !displayTitle[1], false, false])}
        style={
          displayTitle[1]
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Title
          style={displayTitle[1] ? { color: "white" } : { color: "black" }}
        >
          Lanzamientos
        </Title>
        {displayTitle[1] && (
          <TitleContent>
            <Subtitle>Lanz 1</Subtitle>
            <Subtitle>Lanz 2</Subtitle>
            <Subtitle>Lanz 3</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer
        onClick={() => setDisplayTitle([false, false, !displayTitle[2], false])}
        style={
          displayTitle[2]
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Title
          style={displayTitle[2] ? { color: "white" } : { color: "black" }}
        >
          Proyectos
        </Title>
        {displayTitle[2] && (
          <TitleContent>
            <Subtitle>Proy 1</Subtitle>
            <Subtitle>Proy 2</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
      <TitleContainer
        onClick={() => setDisplayTitle([false, false, false, !displayTitle[3]])}
        style={
          displayTitle[3]
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Title
          style={displayTitle[3] ? { color: "white" } : { color: "black" }}
        >
          Comunidad
        </Title>
        {displayTitle[3] && (
          <TitleContent>
            <Subtitle>Contacto</Subtitle>
          </TitleContent>
        )}
      </TitleContainer>
    </MenuContainer>
  );
}

export default Menu;
