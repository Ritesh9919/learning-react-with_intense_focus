import styled from "styled-components";
import style from "./dev.module.css";

const StyledComponent = styled.div`
  background-color: ${(prop) => prop.color};
  padding: 20px;
`;

function App() {
  return (
    <>
      <div style={{ backgroundColor: "red", padding: "20px" }}>
        Inline Style
      </div>
      <div className="external-style">External style </div>
      <StyledComponent color="pink">Styled Components</StyledComponent>
      <div className={style.module}>Css Module</div>
    </>
  );
}

export default App;
