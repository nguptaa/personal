import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  ul {
    margin-left: 0 !important;
    margin-bottom: 0 !important;
    list-style: none;
    font-size: 3rem;
  }

  li {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
  }

  i {
    color: #868e96;
  }

  i:hover {
    color: #572b8b;
  }
  p {
    color: #868e96;
    font-size: 10px;
  }

  @media (max-width: 960px) {
    text-align: center;
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
