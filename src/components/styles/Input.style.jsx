import styled from "styled-components";

export const Input = styled.input`
  border: none;
  width: 60px;
  height: 60px;
  font-size: 0.8rem;
  background-color: rgb(91, 91, 151);
  margin: 2px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    filter: brightness(1.3);
  }
  &:active {
    transform: scale(0.9);
    transition: all ease-in-out 0.1s;
  }
`;
