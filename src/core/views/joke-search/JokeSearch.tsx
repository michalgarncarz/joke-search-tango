import { FC } from "react";
import { shallowEqual } from "react-redux";

import { useAppSelector } from "../../../packages/hooks";
import { JokesSearchBar } from "../../components/organisms";
import { Title, SelectedJoke } from "./JokeSearch.styles";

export const JokeSearch: FC = () => {
  const { selectedJoke } = useAppSelector(
    (state) => ({
      selectedJoke: state.selectedJoke,
    }),
    shallowEqual
  );

  return (
    <>
      <Title>Search jokes</Title>
      {selectedJoke?.length > 0 ? (
        <SelectedJoke>{selectedJoke}</SelectedJoke>
      ) : null}
      <JokesSearchBar />
    </>
  );
};
