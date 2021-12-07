import "./App.css";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
          * {
            font-family: "Inter";
            box-sizing: border-box;
            margin: 0;
            border: 0;
            padding: 0;
            outline: 0;
          }
          a {
            text-decoration: none;
          }
          html,
          #root {
            height: 100%;
          }
          body {
            height: 100%;
            background-color: #2f80ed;
          }
        `}
      />
      <div className="App">
        <p>Hi!</p>
      </div>
    </>
  );
}

export default App;
