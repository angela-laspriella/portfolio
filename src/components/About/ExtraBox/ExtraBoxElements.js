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

  @media screen and (max-width: 600px) {
    min-height: 450px;
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

  div:first-child {
    display: none;
  }

  &:hover {
    transition: 0.5s ease-out;
    background: #ededed;

    div:nth-child(odd) {
      display: block;
    }

    p:last-child {
      margin-top: 8px;
      color: #101010;
    }
  }

  @media screen and (max-width: 600px) {
    background: #ededed;

    div:nth-child(odd) {
      display: block;
    }

    p:last-child {
      margin-top: 8px;
      color: #101010;
    }
  }
`;

export const EmojiWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 35px;

  img {
    width: auto;
    height: 100%;
  }
`;
