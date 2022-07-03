import { FC } from "react";

import { JokeSearch } from "../../views";
import { Container } from "./Main.styles";

export const Main: FC = () => {
  return (
    <Container>
      <JokeSearch />
    </Container>
  );
};
