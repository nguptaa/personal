import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: solid 1px #572b8b;
  text-transform: uppercase;
  text-align: center;
  margin-right: 10px;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #572b8b;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #ffffff;
    color: black;
    transition: all 0.3s ease 0s;
    transform: translateY(-3px);
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
