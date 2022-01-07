import styled from "styled-components";

export const ApproachH = styled.div`
  width: 100%;
  margin: 4% 0;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ApproachV = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 4% 0;

    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 450px;
    }
  }
`;
