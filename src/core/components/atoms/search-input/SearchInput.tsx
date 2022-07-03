import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

import { Container, StyledInput, IconContainer } from "./SearchInput.styles";

type SearchInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  isLoading: boolean;
  isDropdownContentVisible: boolean;
};

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChange,
  onClick,
  isLoading,
  isDropdownContentVisible,
}) => {
  const icon = isLoading
    ? faRotate
    : isDropdownContentVisible
    ? faCaretDown
    : faCaretUp;

  return (
    <Container onClick={onClick}>
      <StyledInput
        value={value}
        onChange={onChange}
        data-testid="search-input"
      />
      <IconContainer>
        <FontAwesomeIcon icon={icon} data-testid="fontawesome-icon" />
      </IconContainer>
    </Container>
  );
};
