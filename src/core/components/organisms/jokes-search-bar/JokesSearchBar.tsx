import { FC, useState, useEffect, useRef } from "react";
import { useDebounce, useOutsideClick } from "../../../../packages/hooks";
import { useLazyGetJokesByPhraseQuery } from "../../../../packages/services";
import { Joke } from "../../../../packages/types";
import { SearchInput } from "../../atoms";
import { DropdownContent } from "./composition/dropdown-content/DropdownContent";
import { Container } from "./JokesSearchBar.styles";

// * Currently dropdown display only results from page 1
// * API doesn't allow us to fetch all jokes
// * In the description I can't find any requirements about paging or infinite scroll
// * If we want to display large amount of data, we can think about virtual list inside dropdown content

export const JokesSearchBar: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);
  const [isDropdownContentVisible, setIsDropdownContentVisible] =
    useState(false);
  const [trigger, { isFetching, isSuccess, data }] =
    useLazyGetJokesByPhraseQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target) {
      setSearchValue(e.target.value);
    }
  };

  const checkDropdownContentVisibility = () => {
    if (!isFetching && isSuccess && data && debouncedSearchValue.length > 0) {
      if (isDropdownContentVisible) {
        setIsDropdownContentVisible(false);
        return;
      }

      setIsDropdownContentVisible(true);
    } else {
      setIsDropdownContentVisible(false);
    }
  };

  const handleClick = () => {
    checkDropdownContentVisibility();
  };

  const handleClickOutside = () => {
    setIsDropdownContentVisible(false);
  };
  useOutsideClick({ ref, callback: handleClickOutside });

  useEffect(() => {
    if (debouncedSearchValue.length > 0) {
      trigger(debouncedSearchValue, false);
    }
  }, [debouncedSearchValue, trigger]);

  useEffect(() => {
    checkDropdownContentVisibility();
  }, [isFetching, isSuccess, data, debouncedSearchValue]);

  return (
    <Container ref={ref}>
      <SearchInput
        value={searchValue}
        onChange={handleChange}
        onClick={handleClick}
        isLoading={isFetching}
        isDropdownContentVisible={isDropdownContentVisible}
      />
      {isDropdownContentVisible && (
        <DropdownContent
          data={data?.results as Joke[]}
          setIsDropdownContentVisible={setIsDropdownContentVisible}
        />
      )}
    </Container>
  );
};
