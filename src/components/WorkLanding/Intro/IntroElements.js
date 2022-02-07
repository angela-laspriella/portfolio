import styled from "styled-components";

export const WorkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  img {
    width: 100%;
    max-width: 1100px;
    margin-top: 24px;
  }

  img:first-child {
    margin-top: 10%;
  }
`;

export const YoutubeBlock = styled.div`
  display: ${({ displayPlease }) => (displayPlease ? "flex" : "none")};
  justify-content: center;

  width: 95%;
  aspect-ratio: 16 / 9;
`;
