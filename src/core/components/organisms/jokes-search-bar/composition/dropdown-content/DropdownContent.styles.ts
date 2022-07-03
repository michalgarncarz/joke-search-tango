import styled from "styled-components";
import { INPUT_HEIGHT } from "../../../../atoms";

const DROPDOWN_ITEM_HEIGHT = 60;
const CONTAINER_PADDING = 5;
const CONTAINER_HEIGHT = DROPDOWN_ITEM_HEIGHT * 5 + CONTAINER_PADDING * 3;

export const Container = styled.div`
  position: absolute;
  top: ${INPUT_HEIGHT + 5}px;
  left: 0;
  right: 0;
  max-height: ${CONTAINER_HEIGHT}px;
  overflow: auto;
  border: 2px solid #383e54;
  border-radius: 5px;
  padding: ${CONTAINER_PADDING}px;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 5px;
  }
`;

export const DropdownItem = styled.button`
  height: ${DROPDOWN_ITEM_HEIGHT}px;
  width: 100%;
  padding: 20px;
  background: transparent;
  color: #a9a9ad;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background: #242a3d;
    color: #2956b0;
    cursor: pointer;
  }
`;

export const NoResultsTitle = styled.div`
  height: 30px;
  width: 100%;
  color: #a9a9ad;
  display: flex;
  align-items: center;
  justify-content: center;
`;
