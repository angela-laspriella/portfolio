import styled from "styled-components";

export const Grid = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem 6rem;

  padding: 80px 0;
  transition: 0.15s ease-out;

  &:hover {
    div:not(:hover) {
      opacity: 0.2;
    }
  }
`;

export const Card = styled.div`
  width: 32vw;
  height: 32vw;

  box-sizing: border-box;
  border: 0.8rem solid white;
  border-radius: 16px;
  background: white;

  img {
    width: 100%;
    border-radius: 16px;
  }

  filter: drop-shadow(0px 14px 25px rgba(16, 27, 54, 0.35));

  opacity: 1;

  &:hover {
    transform: translate(0, -13px);
    transition: transform 0.4s ease-out, background 1s ease-out;
    -webkit-transition: transform 0.6s ease-out, background 1s ease-out;
  }
`;
