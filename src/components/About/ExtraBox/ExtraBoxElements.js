import styled from "styled-components";

export const Content = styled.div`
  max-width: 80vw;
  width: 100%;
  min-height: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 8% 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: space-evenly;
    justify-content: space-evenly;
    margin: 16% 0;

    min-height: 350px;
  }
`;

export const BoxWrap = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #1b1b1b;

  border-radius: 62px;
  padding: 24px 0;

  p {
    margin: 0;
    font-style: normal;
    font-weight: 500;
  }

  p:first-child {
    display: none;
  }

  &:hover {
    transition: 0.5s ease-out;
    background: #ededed;

    p:nth-child(odd) {
      display: block;
    }

    p:last-child {
      margin-top: 8px;
      color: #101010;
    }
  }
`;
