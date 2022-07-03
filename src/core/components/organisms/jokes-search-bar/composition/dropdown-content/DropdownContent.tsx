import { FC } from "react";
import { useAppDispatch } from "../../../../../../packages/hooks";
import { setSelectedJoke } from "../../../../../../packages/store";
import { Joke } from "../../../../../../packages/types";
import {
  Container,
  DropdownItem,
  NoResultsTitle,
} from "./DropdownContent.styles";

type DropdownContentProps = {
  data: Joke[];
  setIsDropdownContentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NO_RESULTS_INFO = "No jokes";

export const DropdownContent: FC<DropdownContentProps> = ({
  data,
  setIsDropdownContentVisible,
}) => {
  const dispatch = useAppDispatch();

  const handleSelectJoke = (joke: string) => {
    dispatch(setSelectedJoke(joke));
    setIsDropdownContentVisible(false);
  };

  if (data.length === 0) {
    return (
      <Container>
        <NoResultsTitle>{NO_RESULTS_INFO}</NoResultsTitle>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {data.map(({ id, joke }) => (
          <DropdownItem
            key={id}
            onClick={() => handleSelectJoke(joke)}
            data-testid="dropdown-item"
          >
            {joke}
          </DropdownItem>
        ))}
      </Container>
    </>
  );
};
