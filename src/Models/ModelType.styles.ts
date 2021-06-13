import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1 px solid lightblue;
  border-radius: 20%;
  height: 100%;

  button {
    border-radius: 0 0 10px 10px;
  }

  div {
    font-family: Arial, Helvetica, sens-serif;
    padding: 1rem;
    height: 100%;
  }
`;
