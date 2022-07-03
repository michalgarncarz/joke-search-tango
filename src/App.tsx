import { FC } from "react";
import { Provider } from "react-redux";

import { Main } from "./core/pages/main/Main";
import { GlobalStyle } from "./core/styles/global";
import { store } from "./packages/store/store";

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};
