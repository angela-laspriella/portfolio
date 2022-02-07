import styled from "styled-components";

export const Line = styled.div`
  width: 100%;
  height: 2px;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;

  margin-bottom: 4%;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;

  margin-bottom: 4%;
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  img {
    border-radius: 20px;

    width: 90%;
    height: auto;

    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0);
  }

  img:hover {
    border: 2px solid white;
  }
`;
