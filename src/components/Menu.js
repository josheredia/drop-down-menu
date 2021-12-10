import { useState } from "react";
import { MenuContainer, Subtitle, SubtitleContent, Title, TitleContainer, TitleContent } from "../styles/Containers";

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
