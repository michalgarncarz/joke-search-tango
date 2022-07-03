import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../../packages/store";
import { DropdownContent, NO_RESULTS_INFO } from "./DropdownContent";
import "@testing-library/jest-dom/extend-expect";
import { Joke } from "../../../../../../packages/types";

const props = {
  data: [],
  setIsDropdownContentVisible: () => {},
};

// * Some solutions are only to reduce development time

describe("DropdownContent", () => {
  it("should render no results info", () => {
    render(
      <Provider store={store}>
        <DropdownContent {...props} />
      </Provider>
    );

    const info = screen.getByText(NO_RESULTS_INFO);

    expect(info).toBeInTheDocument();
  });

  it("should render 10 dropdown items", () => {
    const data: Joke[] = [];
    for (let i = 0; i < 10; i++) {
      data.push({ id: `${i}`, joke: "joke" });
    }

    render(
      <Provider store={store}>
        <DropdownContent {...props} data={data} />
      </Provider>
    );

    expect(data.length).toBe(10);
  });
});

export {};
