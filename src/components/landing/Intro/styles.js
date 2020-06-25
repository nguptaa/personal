import styled from 'styled-components';

export const IntroWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  text-align: center;
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  div.button-greeting-div {
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 70px;
    line-height: 1.1;
  }

  p {
    font-size: 30px;
    line-height: 40px;
  }

  /* Media Query */
  @media (max-width: 1380px) {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
      ${'' /* text-align: center; */}
    }
    p {
      font-size: 16px;
      line-height: normal;
      ${'' /* text-align: center; */}
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
  }
`;
