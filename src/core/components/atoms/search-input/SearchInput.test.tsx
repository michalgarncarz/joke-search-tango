import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "./SearchInput";

const inputPredefinedValue = "test";

const props = {
  value: inputPredefinedValue,
  onChange: () => {},
  onClick: () => {},
  isLoading: false,
  isDropdownContentVisible: false,
};

// * Some solutions are only to reduce development time

describe("SearchInput", () => {
  it("should render input with predefined value", () => {
    render(<SearchInput {...props} />);

    const value = screen.getByTestId("search-input").getAttribute("value");

    expect(value).toBe(inputPredefinedValue);
  });

  it("should change value of variable after invoking input onChange action", () => {
    let inputState = "";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e?.target) {
        inputState = e.target.value;
      }
    };

    render(<SearchInput {...props} onChange={handleChange} />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "onChange" } });

    expect(inputState).toBe("onChange");
  });

  it("should change value of variable after invoking input onClick action", () => {
    let inputState = "";
    const handleClick = () => {
      inputState = "onClick";
    };

    render(<SearchInput {...props} onClick={handleClick} />);

    const input = screen.getByTestId("search-input");
    fireEvent.click(input);

    expect(inputState).toBe("onClick");
  });

  it("should render caret up icon", () => {
    render(<SearchInput {...props} />);

    const classNames = screen
      .getByTestId("fontawesome-icon")
      .getAttribute("class");

    expect(classNames?.includes("fa-caret-up")).toBe(true);
  });

  it("should render caret down icon", () => {
    render(<SearchInput {...props} isDropdownContentVisible={true} />);

    const classNames = screen
      .getByTestId("fontawesome-icon")
      .getAttribute("class");

    expect(classNames?.includes("fa-caret-down")).toBe(true);
  });

  it("should render rotate icon", () => {
    render(<SearchInput {...props} isLoading={true} />);

    const classNames = screen
      .getByTestId("fontawesome-icon")
      .getAttribute("class");

    expect(classNames?.includes("fa-rotate")).toBe(true);
  });
});

export {};
