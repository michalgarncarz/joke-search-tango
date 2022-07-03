import styled from "styled-components";

export const INPUT_HEIGHT = 50;

export const Container = styled.span`
  display: flex;
  flex-wrap: nowrap;
`;

export const StyledInput = styled.input`
  height: ${INPUT_HEIGHT}px;
  width: 240px;
  border: 2px solid #1e54ba;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  background: transparent;
  color: #a9a9ad;
  font-size: 0.9rem;
  padding: 10px 0px 10px 15px;

  &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.span`
  display: block;
  height: ${INPUT_HEIGHT}px;
  width: 40px;
  border: 2px solid #1e54ba;
  border-left: none;
  border-radius: 0px 5px 5px 0px;
  color: #1e54ba;
  display: flex;
  align-items: center;
  justify-content: center;
`;
